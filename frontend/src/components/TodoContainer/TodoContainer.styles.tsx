/* eslint-disable max-len */
import styled from 'styled-components';
import { devices, colors, fontSize, spaceSize } from '../../Theme';

export const StyledTodoContainer = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  border: 1px solid ${colors.borderColor};
  border-radius: 20px 20px 0 0;
  overflow: hidden;

  @media screen and ${devices.tablet} {
    border: none;
    border-radius: 0;
    overflow: auto;
  }
`;

export const StyledHeader = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: row;
  height: 60px;

  @media screen and ${devices.tablet} {
    display: none;
  }
`;

export const StyledTodoList = styled('div')`
  width: 100%;
  display: flex;
  flex-direction: column;
  max-height: ${({ theme }) => theme.todoTable.maxHeight};
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: ${({ theme }) => theme.todoTable.scrollWidth};
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 4px;
  }

  @media screen and ${devices.tablet} {
    flex-direction: row;
    gap: ${spaceSize.hecto};
    overflow-y: hidden;
    overflow-x: scroll;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  @media screen and ${devices.mobileL} {
    flex-direction: column;
    overflow-y: auto;
    overflow-x: auto;
  }
`;

const HeaderElement = styled.h3`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ theme }) => theme.todoTable.elementMinHeight};
  border-right: 1px solid ${colors.borderColor};
  background: #beffd1;
  border-bottom: 1px solid ${colors.borderColor};
`;

export const HeaderTitle = styled(HeaderElement)`
  width: ${({ theme }) => theme.todoTable.title};
`;

export const HeaderDescr = styled(HeaderElement)`
  min-width: ${({ theme }) => theme.todoTable.description};
  flex: 1;
`;

export const HeaderActions = styled(HeaderElement)`
  width: calc(
    ${({ theme }) => theme.todoTable.actions} + ${({ theme }) => theme.todoTable.scrollWidth}
  );
  border-right: none;

  @media screen and ${devices.laptopS} {
    width: calc(
      ${({ theme }) => theme.todoTable.actionsSmall} + ${({ theme }) => theme.todoTable.scrollWidth}
    );
  }
`;

export const Error = styled.p`
  color: ${colors.error};
  font-size: ${fontSize.deci};
  width: 300px;
`;

export const LoaderContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
