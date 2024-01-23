// backend/src/routes/todoRoutes.ts
import express from 'express';
import * as todoController from '../controllers/todoController';

const router = express.Router();

// Rutas para CRUD de todos
router.get('/todos', todoController.getTodos);
router.post('/todos', todoController.createTodo);
router.put('/todos/:id', todoController.updateTodo);
router.delete('/todos/:id', todoController.deleteTodo);

export default router;
