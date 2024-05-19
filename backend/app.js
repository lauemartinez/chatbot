require('dotenv').config();

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT;

app.use(cors());
app.use(bodyParser.json());

// Configuración de la conexión a la base de datos
const db = mysql.createConnection({
    host: process.env.DB_HOST ,
    user: process.env.DB_USER ,
    password: process.env.DB_PASS ,
    database: process.env.DB_DATABASE 
});

db.connect(err => {
    if (err) {
        console.error('Error conectando a la base de datos:', err);
        return;
    }
    console.log('Conexión a la base de datos exitosa');
});

// Ruta que se conecta con mysql y devuelve las entradas buscadas
app.post('/api/data', (request, response) => {
    console.log(request.body.sql_query);
    db.query(request.body.sql_query, (err, results) => {
    console.log(request.body.sql_query, results);
    if (err) {
            response.status(500).send(err);
            return;
        }
        response.json({'data': results});
    });
});

app.listen(port, () => {
    console.log(`Servidor escuchando en http://localhost:${port}`);
});