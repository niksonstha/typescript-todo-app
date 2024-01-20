import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { Todo, useTodo } from "../context/context";
type PropType = {
  isOpen: boolean;
  onClose: () => void;
  oldTodo: Todo;
};
const UpdateTodoModal = ({ isOpen, onClose, oldTodo }: PropType) => {
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [newTodo, setNewTodo] = useState("");
  const { updateTodo } = useTodo();
  const updateHandler = () => {
    updateTodo(oldTodo.id, {
      ...oldTodo,
      text: newTodo,
    });
    onClose();
  };
  return (
    <Modal
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel>New Todo</FormLabel>
            <Input
              ref={initialRef}
              placeholder={oldTodo.text}
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="blue" mr={3} onClick={updateHandler}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default UpdateTodoModal;
