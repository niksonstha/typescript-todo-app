import { Box, Heading } from "@chakra-ui/react";
import TodoInputBox from "./components/todoInput/TodoInputBox";
import TodoList from "./components/todoList/TodoList";
import { useTodo } from "./context/context";

const App = () => {
  const { todos } = useTodo();

  return (
    <Box width={"50%"} mx={"auto"}>
      <Heading fontFamily={"Cascadia code"} textAlign={"center"} mt={5} mb={5}>
        Todo application using typescript
      </Heading>

      <Box
        bgColor={"#BFD8AF"}
        rounded={10}
        padding={5}
        height={"70vh"}
        boxShadow="2px 2px 10px #BFD8AF"
      >
        <TodoInputBox />
        {todos.map((todo) => (
          <Box key={todo.id}>
            <TodoList todo={todo} />
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default App;
