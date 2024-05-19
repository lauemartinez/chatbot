import { Component, OnInit } from '@angular/core';
import { GenerateContentRequest, GoogleGenerativeAI, Part } from '@google/generative-ai';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Message } from './models/message.model';
import { SupabaseService } from '../app/database/supabase.service';
import { MysqlService } from '../app/database/mysql.service';
import { MarkdownModule  } from 'ngx-markdown';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, MarkdownModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  constructor(private mysqlService: MysqlService) { }

  public messages: Message[] = [];
  public supabaseService: SupabaseService = new SupabaseService;
  public currentMessage: string = "";
  public isLoadingResponse: boolean = false;
  public databaseFn = environment.databaseProvider == 'mysql' ? this.fetchMysqlQueryData : this.fetchSupabaseQueryData; 
  private globalId: number = 1;

  // Gemini
  apiKey = environment.apiKey;
  genAI = new GoogleGenerativeAI(this.apiKey);  
  
  // Primera IA encargada de interactuar con el usuario y mostrar data
  geminiChatbot = this.genAI.getGenerativeModel({
    model: "gemini-1.5-pro-latest",
    systemInstruction: "Eres un asistente virtual amigable llamado TomoBot que puede responder preguntas sobre estadisticas de libros, clientes y pedidos de una libreria"
  });

  // Segunda IA encargada de generar queries de SQL
  geminiSqlGenerator = this.genAI.getGenerativeModel({
    model: "gemini-1.5-pro-latest",
    systemInstruction: "La base de datos está diseñada para gestionar la información de una librería, incluyendo detalles sobre los libros disponibles, los clientes, los pedidos realizados y los detalles de cada pedido. A continuación se describe la estructura de la base de datos, incluyendo las tablas, los campos, los tipos de datos y las relaciones entre las tablas. Genera una consulta SQL sin dar una explicacion, solo el codigo, con las siguientes tablas: books (campos: book_id INT PRIMARY KEY AUTO_INCREMENT, title VARCHAR(255), author VARCHAR(255), publisher VARCHAR(255), year_published INT, genre VARCHAR(100), price DECIMAL(10, 2), stock_quantity INT); customers (campos: customer_id INT PRIMARY KEY AUTO_INCREMENT, first_name VARCHAR(255), last_name VARCHAR(255), email VARCHAR(255) UNIQUE, phone_number VARCHAR(20), address VARCHAR(255), city VARCHAR(100), state VARCHAR(100), zip_code VARCHAR(20)); orders (campos: order_id INT PRIMARY KEY AUTO_INCREMENT, customer_id INT, order_date TIMESTAMP, total_amount DECIMAL(10, 2), status VARCHAR(50), FOREIGN KEY (customer_id) REFERENCES customers(customer_id)); order_details (campos: order_detail_id INT PRIMARY KEY AUTO_INCREMENT, order_id INT, book_id INT, quantity INT, price DECIMAL(10, 2), FOREIGN KEY (order_id) REFERENCES orders(order_id), FOREIGN KEY (book_id) REFERENCES books(book_id)). Importante: solo puedes consultar informacion, no puedes crear, modificar o borrar tablas"
  });

  // Main/Init
  ngOnInit() {
    this.createNewMessage('Hola soy TomoBot! ¿Como puedo ayudarte?', 'sender');
  }

  // Metodos

  // Genera una respuesta respondiendo al usuario
  async generateResponse(prompt: string) {
    const result = await this.geminiChatbot.generateContent(prompt);
    const response = await result.response;
    this.createNewMessage(response.text(), 'sender');
    this.isLoadingResponse = false;
  }

  // Esta funcion manda el prompt a gemini para verificar que sea una pregunta para consultar en la db
  // Si entiende que no hay una query devuelve una respuesta autogenerada
  // Si hay una query busca al data en la db y genera una respuesta con esa data
  async generateSqlResponse(prompt: string) {
    const result = await this.geminiSqlGenerator.generateContent(prompt);
    const regex = /```sql\n([\s\S]+?)\n```/;
    let sql_query_array = await regex.exec(result.response.text());

    if(sql_query_array && sql_query_array.length > 1) {
      let sql_query = sql_query_array[1].replace(/\n/g, " ");
      sql_query = sql_query_array[1].replace("  ", " ");
      this.databaseFn(sql_query, prompt);
    } else {
      this.generateResponse(prompt);
    }
  }

  // Busca en la db de Supabase
  private fetchSupabaseQueryData(sql_query: string, prompt: string) {
    this.supabaseService.get(sql_query).then((response) => { this.fetchAux(response, prompt) });
  }

  // Busca en la db de Supabase
  private fetchMysqlQueryData(sql_query: string, prompt: string) {
    this.mysqlService.getData(sql_query).subscribe((response) => { this.fetchAux(response, prompt) });
  }

  // Funcion auxiliar
  private fetchAux(response:any, prompt: string) {
    if(response.data && response.data.length > 0){
      this.generateResponse(this.parsePromptFromSqlResponse(response.data, prompt));
    } else {
      this.generateResponse('Responde pero diciendo que no encontraste data');
    }
  }

  // Esta funcion agarra la data que trae la base de datos y la manda a gemini para que la muestre como respuesta
  private parsePromptFromSqlResponse(data: any, prompt: string){
    var dataString: string[] = [];
    data.forEach((item: any) => dataString.push(JSON.stringify(item)));
    return prompt + '. (Simula que fuiste a buscar la data y encontraste esto: [' + dataString.join(',') + '])';
  }

  // Agrega el mensaje nuevo al listado
  private createNewMessage(content: string, author: string) {
    this.messages.push(new Message(this.globalId, content, this.getTime(), author, this.getDay()));
    this.globalId++;
  }


  // Toma el input del usuario, crea un mensaje y arranca a buscar una respuesta 
  public sendMessage() {
    this.isLoadingResponse = true;
    this.createNewMessage(this.currentMessage, 'receiver');
    this.generateSqlResponse(this.currentMessage);
    this.currentMessage = "";
  }
  
  // Getter de Tiempo
  private getTime(): string{
    var currentDate = new Date();
    var hours = currentDate.getHours() < 10 ? '0' + currentDate.getHours() : currentDate.getHours();
    var minutes = currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
    return hours + ':' + minutes;
  }
  
  // Getter de Dia
  private getDay(): number{
    var currentDate = new Date();
    return currentDate.getDay();
  }
}
