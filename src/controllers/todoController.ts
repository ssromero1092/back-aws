// backend/src/controllers/todoController.ts
import { Request, Response } from 'express';
import { Todo } from '../models/todoModel';

const todos: Todo[] = [
  { id: 1, title: 'Comprar', completed: false },
  { id: 2, title: 'Leer', completed: true },
  { id: 3, title: 'Hacer', completed: false },
];

export const getTodos = (_req: Request, res: Response) => {
  res.json(todos);
};

export const createTodo = (req: Request, res: Response) => {
  const newTodo: Todo = req.body;
  todos.push(newTodo);
  res.json(newTodo);
};

export const updateTodo = (req: Request, res: Response) => {
  const todoId = parseInt(req.params.id, 10);
  const updatedTodo: Todo = req.body;

  const index = todos.findIndex((todo) => todo.id === todoId);

  if (index !== -1) {
    todos[index] = { ...todos[index], ...updatedTodo };
    res.json(todos[index]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
};

export const deleteTodo = (req: Request, res: Response) => {
  const todoId = parseInt(req.params.id, 10);
  const index = todos.findIndex((todo) => todo.id === todoId);

  if (index !== -1) {
    const deletedTodo = todos.splice(index, 1);
    res.json(deletedTodo[0]);
  } else {
    res.status(404).json({ error: 'Todo not found' });
  }
};
