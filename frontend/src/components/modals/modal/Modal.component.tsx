import React from 'react';
import { ViewContainer, BackGroundShade, ClosingCross } from '../ViewModal/ViewModal.styles';
import { AddForm } from '../../Formic/AddForm';
import { EditForm } from '../../Formic/EditForm';
import { ModalContainer } from './Modal.styles';
import { ITodo } from '../../../types';
import { IMGS } from '../../../assets/index';

type Props = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  todo?: ITodo;
};

export const Modal: React.FC<Props> = ({ setOpenModal, todo }) => {
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <ViewContainer>
      <BackGroundShade onClick={closeModal} />
      <ModalContainer>
        <ClosingCross src={IMGS.close} alt="close" onClick={closeModal} />
        {
          todo
          ? (<EditForm setOpenModal={setOpenModal} todo={todo} />)
          : (<AddForm setOpenModal={setOpenModal} />)
        }
      </ModalContainer>
    </ViewContainer>
  );
};
