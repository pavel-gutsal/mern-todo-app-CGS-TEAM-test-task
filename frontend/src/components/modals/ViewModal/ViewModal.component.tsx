import React from 'react';
import { ITodo } from '../../../types';
import { ViewContainer, BackGroundShade, ModalWrapper, ClosingCross, ModalTitle, ModalText, ModalDescr, Label } from './ViewModal.styles';
import { ToggleSwitch } from '../../ToggleSwitch';
import { Button } from '../../../GlobalStyles/GlobalStyles';
import { useEditTodo } from '../../../customHooks/useEditTodo.hook';

type Props = {
  todo: ITodo;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

export const ViewModal: React.FC<Props> = ({ todo, setModalOpen }) => {
  const { editTodo } = useEditTodo();

  const closeModal = () => {
    setModalOpen(false);
  };

  const toggleCompleted = () => {
    const updates = { completed: !todo.completed };
    editTodo(todo._id, updates);
  };

  return (
    <ViewContainer>
      <BackGroundShade onClick={closeModal} />
      <ModalWrapper>
        <ClosingCross src="./assets/close.svg" alt="close" onClick={closeModal} />
        <ModalTitle>{todo.title}</ModalTitle>
        <ModalText>Description</ModalText>
        <ModalDescr>{todo.text}</ModalDescr>
        <Label>
          <ModalText>Complete</ModalText>
          <ToggleSwitch
            id={todo._id}
            check={todo.completed}
            onClickFunction={toggleCompleted}
          />
        </Label>
        <Button type="button" onClick={closeModal}>
          Back
        </Button>
      </ModalWrapper>
    </ViewContainer>
  );
};
