import { Box, Button } from "@chakra-ui/react";
import styles from "./todoInputBox.module.css";
import { FaPlus } from "react-icons/fa";
import { useTodo } from "../../context/context";
import { useState } from "react";

const TodoInputBox = () => {
  const [todo, setTodo] = useState("");
  const { addTodo } = useTodo();

  const addTodoHandler = () => {
    addTodo({
      id: Math.floor(Math.random() * 1000),
      text: todo,
      isCompleted: false,
    });
    setTodo("");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTodoHandler();
    }
  };

  return (
    <Box width={"100%"} display={"flex"} gap={5} alignItems={"center"}>
      <input
        type="text"
        placeholder="Enter your todo"
        className={styles.todo}
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        flex={0.1}
        padding={6}
        bgColor={"#D4E7C5"}
        borderRadius="50%"
        size={"2rem"}
        boxShadow="2px 2px 10px #99bc85"
        _hover={{
          bgColor: "#99BC85",
        }}
        _active={{
          transform: "scale(0.9)",
        }}
        onClick={addTodoHandler}
      >
        <FaPlus />
      </Button>
    </Box>
  );
};

export default TodoInputBox;
