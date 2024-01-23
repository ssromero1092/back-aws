import { getTodos, createTodo, updateTodo, deleteTodo } from './todoController';
import { Request, Response } from 'express';

describe('Pruebas del controlador de Todos', () => {
  let mockResponse: Partial<Response>;

  beforeEach(() => {
    mockResponse = {
      json: jest.fn(),
      status: jest.fn().mockReturnThis(),
    };
  });

  test('getTodos debería devolver la lista de todos', () => {
    const mockRequest = {} as Request;
    getTodos(mockRequest, mockResponse as Response);
    expect(mockResponse.json).toHaveBeenCalledWith([
      { id: 1, title: 'Comprar', completed: false },
      { id: 2, title: 'Leer', completed: true },
      { id: 3, title: 'Hacer', completed: false },
    ]);
  });

  test('createTodo debería agregar un nuevo Todo y devolverlo', () => {
    const mockRequest = {
      body: { id: 4, title: 'Nueva tarea', completed: false },
    } as Request<{}, {}, { id: number; title: string; completed: boolean }>;
    createTodo(mockRequest, mockResponse as Response);
    expect(mockResponse.json).toHaveBeenCalledWith({ id: 4, title: 'Nueva tarea', completed: false });
  });

  test('updateTodo debería actualizar un Todo existente y devolverlo', () => {
    const mockRequest = {
      params: { id: '1' },
      body: { title: 'Comprar leche', completed: true },
    } as Request<{ id: string }, {}, { title: string; completed: boolean }>;
    updateTodo(mockRequest, mockResponse as Response);
    expect(mockResponse.json).toHaveBeenCalledWith({ id: 1, title: 'Comprar leche', completed: true });
  });

  test('updateTodo debería devolver un error si el Todo no existe', () => {
    const mockRequest = {
      params: { id: '99' },
      body: { title: 'Actualizar tarea inexistente' },
    } as Request<{ id: string }, {}, { title: string }>;
    updateTodo(mockRequest, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Todo not found' });
  });

  test('deleteTodo debería eliminar un Todo existente y devolverlo', () => {
    const mockRequest = {
      params: { id: '2' },
    } as Request<{ id: string }>;
    deleteTodo(mockRequest, mockResponse as Response);
    expect(mockResponse.json).toHaveBeenCalledWith({ id: 2, title: 'Leer', completed: true });
  });

  test('deleteTodo debería devolver un error si el Todo no existe', () => {
    const mockRequest = {
      params: { id: '99' },
    } as Request<{ id: string }>;
    deleteTodo(mockRequest, mockResponse as Response);
    expect(mockResponse.status).toHaveBeenCalledWith(404);
    expect(mockResponse.json).toHaveBeenCalledWith({ error: 'Todo not found' });
  });
});
