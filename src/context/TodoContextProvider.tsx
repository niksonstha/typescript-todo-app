import { ReactNode, useState } from "react";
import { Todo, TodoContext } from "./context";

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (newTodo: Todo) => {
    if (newTodo.text == "") return;
    setTodos((prevTodo) => {
      return [...prevTodo, newTodo];
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.id !== id);
    });
  };

  const updateTodo = (id: number, updatedTodo: Todo) => {
    setTodos((prevTodos) =>
      prevTodos.map((prevTodo) => {
        return prevTodo.id === id ? updatedTodo : prevTodo;
      })
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
