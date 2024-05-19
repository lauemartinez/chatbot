# Chatbot

## Introducción

Este es un chatbot diseñado para tomar propmpts con preguntas sobre libros o estadisticas y devolver informacion consultado la base de datos

![WhatsApp Image 2024-05-19 at 03 42 47_1b5f7a84](https://github.com/lauemartinez/chatbot/assets/86857156/7a3dc75e-a778-4cc5-965c-25e8b6dbe1cc)

Las tablas principales son:

- **books**: Almacena información sobre los libros disponibles en la librería.
- **customers**: Almacena información sobre los clientes que compran en la librería.
- **orders**: Almacena información sobre los pedidos realizados por los clientes.
- **order_details**: Almacena información detallada sobre los productos incluidos en cada pedido.

## Pre-Requisitos de Entorno

```
Node v20.12.2
MySql V8.0.37
```

## Instalacion

Luego de clonar el proyecto vamos a correr el comando npm intsall para decargar las dependencias

```console
npm install
```

## Migraciones y Seeders

Primero moverse dentro de la carpeta de backend correr las migraciones y luego correr los seeders en orden para no tener problemas con las claves foraneas

```console
// CD a Backend
cd .\backend\

// Migrations
npx knex migrate:latest

// Seeders en orden
knex seed:run --specific=001_seed_books.js
knex seed:run --specific=002_seed_customers.js
knex seed:run --specific=003_seed_orders.js   
knex seed:run --specific=004_seed_order_details.js
```

## Enviroment

Dentro del proyecto hay que crear 3 enviroments que tenemos que llenar con nuestra data, uno esta dentro de backend llamado `.env` y otros 2 en la carpeta enviroments llamado `enviroments.ts` y `enviroments.development.ts` copiar y pegar dentro de estas carpetas el archivo con `.example`, reemplazar el nombre por los correspondientes, luego completar con la data necesaria.

```js
// .env
PORT=3000
DB_HOST=localhost
DB_USER=root
DB_PASS=3x4mpl3
DB_DATABASE=your_database
```

```ts
// enviroments.ts y enviroments.development.ts
export const environment = {
    apiKey: 'GEMINI_API_KEY',
    supabaseUrl: 'YOUR_SB_URL',
    supabaseKey: 'YOUR_SB_KEY',
    backendUrl: 'http://localhost:3000/api/data',
    databaseProvider: 'mysql' // or supabase
};
```

## Levantar Servidores

Una vez que tengamos los dos servidores configurados tenemos que levantarlos en sus carpetas correspondientes

Frontend
```console
ng serve
```

Backend
```console
cd .\backend\
node app.js
```
