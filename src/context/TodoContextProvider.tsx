import { ReactNode, useEffect, useState } from "react";
import { Todo, TodoContext } from "./context";

const TodoContextProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>([]);
  useEffect(() => {
    // Retrieve todos from local storage when the component mounts
    const storedTodos = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(storedTodos);
  }, []);

  const addTodo = (newTodo: Todo) => {
    if (newTodo.text == "") return;
    setTodos((prevTodos) => {
      const updatedTodos = [...prevTodos, newTodo];
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const deleteTodo = (id: number) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  const updateTodo = (id: number, updatedTodo: Todo) => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((prevTodo) =>
        prevTodo.id === id ? updatedTodo : prevTodo
      );
      localStorage.setItem("todos", JSON.stringify(updatedTodos));
      return updatedTodos;
    });
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
