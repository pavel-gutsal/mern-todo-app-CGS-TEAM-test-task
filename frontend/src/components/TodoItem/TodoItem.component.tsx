import React, { useState } from 'react';
import { Button } from '../../GlobalStyles/GlobalStyles';
import { ITodo } from '../../types';
import {
  TodoTitle,
  TodoItemWrapper,
  TodoDescr,
  TodoAction,
  TextTitle,
  TextDescr
} from './TodoItem.styles';
import { ToggleSwitch } from '../ToggleSwitch';
import { stringSlicer } from '../../utils/functions';
import { ViewModal } from '../modals/ViewModal';
import { Modal } from '../modals/modal';
import { colors } from '../../Theme';
import { useDeleteTodo } from '../../customHooks/useDeleteTodo.hook';
import { useEditTodo } from '../../customHooks/useEditTodo.hook';

type Props = {
  todo: ITodo;
  index: number;
};

export const TodoItem: React.FC<Props> = ({ todo, index }) => {
  const [viewModalOpen, setViewModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const { deleteTodo } = useDeleteTodo();
  const { editTodo } = useEditTodo();

  const toggleViewModal = () => {
    setViewModalOpen((prev) => !prev);
  };

  const toggleEditModal = () => {
    setEditModalOpen((prev) => !prev);
  };

  const toggleCompleted = () => {
    const updates = { completed: !todo.completed };
    editTodo(todo._id, updates);
  };

  return (
    <>
      <TodoItemWrapper bg={index % 2 === 0 ? 'even' : 'odd'}>
        <TodoTitle>
          <TextTitle>{stringSlicer(todo.title, 60)}</TextTitle>
        </TodoTitle>
        <TodoDescr>
          <TextDescr>{stringSlicer(todo.text, 200)}</TextDescr>
        </TodoDescr>
        <TodoAction>
          <Button type="button" bgColor={colors.greenish} onClick={toggleViewModal}>
            View
          </Button>
          <Button type="button" onClick={toggleEditModal}>
            Edit
          </Button>
          <Button
            type="button"
            bgColor={colors.pinkish}
            onClick={() => { deleteTodo(todo._id) }}
          >
            Delete
          </Button>
          <ToggleSwitch
            id={todo._id}
            check={todo.completed}
            onClickFunction={toggleCompleted}
          />
        </TodoAction>
      </TodoItemWrapper>
      {viewModalOpen && (
        <ViewModal todo={todo} setModalOpen={setViewModalOpen} />
      )}
      {editModalOpen && <Modal todo={todo} setOpenModal={setEditModalOpen} />}
    </>
  );
};
