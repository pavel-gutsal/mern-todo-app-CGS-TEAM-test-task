import React from 'react';
import { Wrapper, ButtonWrapper, FButton, Input, SLink } from './FilterBar.styles';
import { colors } from '../../Theme';

type Props = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FilterBar: React.FC<Props> = ({ setOpenModal }) => {
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <FButton bgColor={colors.greenish} onClick={toggleModal}>
          Add
        </FButton>
        <SLink to="/">
          <FButton bgColor={colors.bluish}>All</FButton>
        </SLink>
        <SLink to="/active">
          <FButton bgColor={colors.borderColor}>Active</FButton>
        </SLink>
        <SLink to="/completed">
          <FButton>Completed</FButton>
        </SLink>
      </ButtonWrapper>
      <Input placeholder="Search ..." />
    </Wrapper>
  );
};
