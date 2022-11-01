import React, { useState } from 'react';
import { StyledDashboard, StyledContainer } from './Dashboard.styles';
import { TodoContainer } from '../../components/TodoContainer';
import { FilterBar } from '../../components/FilterBar';
import { Modal } from '../../components/modals/modal';

export const DashBoard = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <StyledDashboard>
      <StyledContainer>
        <FilterBar setOpenModal={setOpenModal} />
        <TodoContainer />
        {openModal && <Modal setOpenModal={setOpenModal} />}
      </StyledContainer>
    </StyledDashboard>
  );
};
