import { boolean, pgTable, text } from 'drizzle-orm/pg-core';

export const testing = pgTable('testing', {
  id: text('id').notNull().primaryKey(),
  name: text('name'),
});

export const todo = pgTable('todo', {
  todoId: text('todoId').notNull().primaryKey(),
  description: text('description').notNull(),
  completed: boolean('completed').notNull(),
});

export type Todo = typeof todo.$inferSelect;
