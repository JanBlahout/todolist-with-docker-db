'use server';

import { db } from '@/db';
import { Todo, todo } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function createTodoAction(todoData: Todo) {
  await db.insert(todo).values(todoData);
  getTodos();
}

export async function deleteTodoAction(todoId: string) {
  await db.delete(todo).where(eq(todo.todoId, todoId));
  getTodos();
}

export async function updateTodoAction(todoId: string, status: boolean) {
  await db
    .update(todo)
    .set({ completed: status })
    .where(eq(todo.todoId, todoId));
  getTodos();
}

export async function getTodos() {
  return await db.query.todo.findMany();
}
