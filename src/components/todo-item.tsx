'use client';
import { Todo } from '@/db/schema';
import { deleteTodoAction } from './actions';

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem(props: TodoItemProps) {
  const { todo } = props;

  return (
    <div key={todo.todoId}>
      <span>{todo.description}</span>
      <input type="checkbox" checked={todo.completed} readOnly />
      <button
        onClick={() => {
          deleteTodoAction(todo.todoId);
        }}
      >
        Delete
      </button>
    </div>
  );
}
