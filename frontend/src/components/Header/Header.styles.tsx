import styled from 'styled-components';
import { colors, spaceSize } from '../../Theme';

export const StyledHeader = styled.header`
  background-color: ${colors.header};
  box-shadow: 0 0 10px 0 #00000048;
  height: ${({ theme }) => theme.sizes.headerHeight};
  display: flex;
  align-items: center;
  justify-content: flex-end;
  padding-right: ${spaceSize.triple};
  z-index: 2;
  position: relative;

  button {
    outline: none;
    background: ${colors.bluish};
    border-radius: ${spaceSize.hecto};
    border: none;
    box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.2);
    height: 40px;
    width: 150px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    transition: all 0.3s ease-in-out;

    &:hover,
    &:focus {
      cursor: pointer;
      box-shadow: 0 0 10px 0 hsla(0, 0%, 0%, 0.6);
    }
  }
`;
