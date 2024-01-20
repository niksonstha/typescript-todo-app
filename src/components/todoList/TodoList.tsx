import { Box, Text, useDisclosure } from "@chakra-ui/react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Todo, useTodo } from "../../context/context";
import UpdateTodoModal from "../UpdateTodoModal";

type PropsType = {
  todo: Todo;
};

const TodoList = ({ todo }: PropsType) => {
  const { deleteTodo } = useTodo();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box mt={3}>
      <UpdateTodoModal onClose={onClose} isOpen={isOpen} oldTodo={todo} />
      <Box
        bgColor={"#D4E7C5"}
        padding={5}
        rounded={10}
        mt={5}
        display={"flex"}
        justifyContent={"space-between"}
      >
        <Text>{todo.text}</Text>
        <Box
          display={"flex"}
          fontSize={"1.5rem"}
          gap={5}
          alignItems={"center"}
          userSelect={"none"}
        >
          <Box
            transition="transform 0.2s ease"
            _hover={{
              transform: "scale(1.2)",
            }}
            _active={{
              transform: "scale(0.9)",
            }}
          >
            <FaEdit color="green" cursor={"pointer"} onClick={onOpen} />
          </Box>
          <Text
            transition="transform 0.2s ease"
            _hover={{
              transform: "scale(1.2)",
            }}
            _active={{
              transform: "scale(0.9)",
            }}
          >
            <MdDelete
              color="red"
              cursor={"pointer"}
              onClick={() => deleteTodo(todo.id)}
            />
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default TodoList;
