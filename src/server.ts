// backend/src/server.ts
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { getTodos, createTodo, updateTodo, deleteTodo } from './controllers/todoController';

const app = express();
const port = 3001;

app.use(cors());
app.use(bodyParser.json());

// Rutas para CRUD de todos
app.get('/todos', getTodos);
app.post('/todos', createTodo);
app.put('/todos/:id', updateTodo);
app.delete('/todos/:id', deleteTodo);

app.listen(port, () => {
  console.log(`Servidor corriendo en  http://localhost:${port}`);
});
