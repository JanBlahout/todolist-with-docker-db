'use client';
import { Todo } from '@/db/schema';
import { deleteTodoAction, updateTodoAction } from './actions';
import { Card, CardContent, CardFooter } from './ui/card';
import { Button } from './ui/button';

type TodoItemProps = {
  todo: Todo;
};

export function TodoItem(props: TodoItemProps) {
  const { todo } = props;

  const completedStyle = {
    opacity: todo.completed ? '0.5' : '1',
    textDecoration: todo.completed ? 'line-through' : 'none',
  };

  return (
    <Card key={todo.todoId} style={completedStyle}>
      <CardContent>
        <p>{todo.description}</p>
      </CardContent>

      <CardFooter>
        <Button
          onClick={() => {
            updateTodoAction(todo.todoId, !todo.completed);
          }}
        >
          {todo.completed ? 'Mark as undone' : 'Mark as completed'}
        </Button>

        <Button
          onClick={() => {
            deleteTodoAction(todo.todoId);
          }}
        >
          Delete
        </Button>
      </CardFooter>
    </Card>
  );
}
