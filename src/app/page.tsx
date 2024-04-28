import { AddTodo } from '@/components/add-todo';
import { TodoItem } from '@/components/todo-item';
import { db } from '@/db';

export default async function Home() {
  const todos = await db.query.todo.findMany();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AddTodo />
      {todos.map((todo) => (
        <TodoItem key={todo.todoId} todo={todo} />
      ))}
    </main>
  );
}
