'use server';

import { db } from '@/db';
import { Todo, todo } from '@/db/schema';
import { eq } from 'drizzle-orm';

export async function createTodoAction(todoData: Todo) {
  await db.insert(todo).values(todoData);
}

export async function deleteTodoAction(todoId: string) {
  await db.delete(todo).where(eq(todo.todoId, todoId));
}
