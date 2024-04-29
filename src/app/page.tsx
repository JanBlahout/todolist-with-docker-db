import { getTodos } from '@/components/actions';
import { AddTodo } from '@/components/add-todo';
import { TodoItem } from '@/components/todo-item';
import { db } from '@/db';
import { Todo } from '@/db/schema';
import { useEffect, useState } from 'react';

export default async function Home() {
  const todos = await getTodos();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddTodo />
      {todos.map((todo) => (
        <TodoItem key={todo.todoId} todo={todo} />
      ))}
    </main>
  );
}
