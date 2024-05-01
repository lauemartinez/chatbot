import { Component, OnInit } from '@angular/core';
import { GenerateContentRequest, GoogleGenerativeAI, Part } from '@google/generative-ai';
import { environment } from '../environments/environment';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common';
import { Message } from './message';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  public messages: Message[] = [];
  public currentMessage: string = "";
  public isLoadingResponse: boolean = false;
  private globalId: number = 1;

  // Gemini
  apiKey = environment.apiKey;
  genAI = new GoogleGenerativeAI(this.apiKey);
  gemini = this.genAI.getGenerativeModel({ model: "gemini-pro"});

  // Main/Init
  ngOnInit() {
    this.createNewMessage('Hola! ¿Como puedo ayudarte?', 'sender');
  }

  // Metodos
  async generateResponse(prompt: string) {
    const result = await this.gemini.generateContent(prompt);
    const response = await result.response;
    this.createNewMessage(response.text(), 'sender');
    this.isLoadingResponse = false;
  }

  private createNewMessage(content: string, author: string) {
    this.messages.push(new Message(this.globalId, content, this.getTime(), author, this.getDay()));
    this.globalId++;
  }

  public sendMessage() {
    this.isLoadingResponse = true;
    this.createNewMessage(this.currentMessage, 'receiver');
    this.generateResponse(this.currentMessage);
    this.currentMessage = "";
  }

  private getTime(): string{
    var currentDate = new Date();
    var hours = currentDate.getHours() < 10 ? '0' + currentDate.getHours() : currentDate.getHours();
    var minutes = currentDate.getMinutes() < 10 ? '0' + currentDate.getMinutes() : currentDate.getMinutes();
    return hours + ':' + minutes;
  }

  private getDay(): number{
    var currentDate = new Date();
    return currentDate.getDay();
  }
}
