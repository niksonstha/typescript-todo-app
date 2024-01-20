import { createContext, useContext } from "react";

export type Todo = {
  id: number;
  text: string;
  isCompleted: boolean;
};

type TodoContextType = {
  todos: Todo[];
  addTodo: (todo: Todo) => void;
  deleteTodo: (id: number) => void;
  updateTodo: (id: number, todo: Todo) => void;
};

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {},
  deleteTodo: () => {},
  updateTodo: () => {},
});

export const useTodo = () => {
  const todo = useContext(TodoContext);
  return todo;
};
