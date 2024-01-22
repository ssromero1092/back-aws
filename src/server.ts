import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getTodos, createTodo, updateTodo, deleteTodo } from './controllers/todoController';
import * as httpToHttps from 'express-http-to-https';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Middleware para redirigir HTTP a HTTPS
app.use(httpToHttps.redirectToHTTPS());

// Rutas para CRUD de todos
app.get('/todos', getTodos);
app.post('/todos', createTodo);
app.put('/todos/:id', updateTodo);
app.delete('/todos/:id', deleteTodo);

app.listen(port, () => {
  console.log(`Servidor corriendo en https://localhost:${port}`);
}); 
