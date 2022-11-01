import styled from 'styled-components';
import { devices, colors, fontSize, spaceSize } from '../../Theme';

type Props = {
  bg: 'even' | 'odd';
};

export const TodoItemWrapper = styled.div<Props>`
  width: 100%;
  display: flex;
  background: ${({ bg }) => (bg === 'odd' ? 'white' : '#ecfcff')};
  height: fit-content;

  @media screen and ${devices.tablet} {
    flex-direction: column;
    background: white;
    border: 1px solid black;
    box-shadow: 0 0 10px 0 #52525274;
    height: 300px;
  }
`;

export const TodoText = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 ${spaceSize.hecto};
  min-height: ${({ theme }) => theme.todoTable.elementMinHeight};

  @media screen and ${devices.laptopS} {
    padding: 0 ${spaceSize.mili};
  }
`;

export const TodoTitle = styled(TodoText)`
  width: ${({ theme }) => theme.todoTable.title};
  border-right: 1px solid ${colors.borderColor};

  @media screen and ${devices.tablet} {
    width: 100%;
    border: none;
  }
`;

export const TodoDescr = styled(TodoText)`
  min-width: ${({ theme }) => theme.todoTable.description};
  border-right: 1px solid ${colors.borderColor};
  flex: 1;

  @media screen and ${devices.tablet} {
    width: 100%;
    border: none;
  }

  @media screen and ${devices.mobileL} {
    min-width: 100%;
    width: 100%;
  }
`;

export const TodoAction = styled(TodoText)`
  width: ${({ theme }) => theme.todoTable.actions};
  gap: ${spaceSize.regular};

  @media screen and ${devices.laptopS} {
    width: ${({ theme }) => theme.todoTable.actionsSmall};
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(2, auto);
    align-content: center;
    gap: ${spaceSize.mili};
    min-height: 100px;
  }

  @media screen and ${devices.tablet} {
    display: flex;
  }
`;

const TodoItemText = styled.p`
  display: flex;
  width: 100%;
  height: 100%;
  padding: ${spaceSize.mili} 0;
  overflow-wrap: anywhere;
`;

export const TextDescr = styled(TodoItemText)`
  font-size: ${fontSize.regular};

  @media screen and ${devices.tablet} {
    font-size: ${fontSize.deci};
  }
`;

export const TextTitle = styled(TodoItemText)`
  font-size: ${fontSize.regular};
`;
