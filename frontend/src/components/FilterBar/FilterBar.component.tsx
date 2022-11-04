import React from 'react';
import { useParams } from 'react-router-dom';
import { Wrapper, ButtonWrapper, FButton, Input, SLink } from './FilterBar.styles';
import { colors } from '../../Theme';

type Props = {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
};

export const FilterBar: React.FC<Props> = ({ setOpenModal }) => {
  const { filterCriteria } = useParams();
  const toggleModal = () => {
    setOpenModal((prev) => !prev);
  };

  const isActive = (param?: string) => filterCriteria === param ? (colors.pinkish) : (colors.orangy)

  return (
    <Wrapper>
      <ButtonWrapper>
        <FButton bgColor={colors.greenish} onClick={toggleModal}>
          Add
        </FButton>
        <SLink to="/">
          <FButton bgColor={isActive()}>All</FButton>
        </SLink>
        <SLink to="/active">
          <FButton bgColor={isActive('active')}>Active</FButton>
        </SLink>
        <SLink to="/completed">
          <FButton bgColor={isActive('completed')}>Completed</FButton>
        </SLink>
      </ButtonWrapper>
      <Input placeholder="Search ..." />
    </Wrapper>
  );
};
