import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '../../GlobalStyles/GlobalStyles';
import { colors, spaceSize } from '../../Theme';
import { NONAME } from 'dns';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex-direction: column-reverse;
    gap: ${spaceSize.regular};
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  width: fit-content;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: ${colors.shadow};

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, auto);
    gap: ${spaceSize.nano};
  }
`;

export const SLink = styled(Link)`
  text-decoration: none;
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex: 1;
  }
`

export const FButton = styled(Button)`
  heigth: ${({ theme }) => theme.filter.elementHeight};
  border-radius: 0;
  box-shadow: none;
  display: flex;

  @media screen and (max-width: ${({ theme }) => theme.tablet}) {
    flex: 1;
  }
`;

export const Input = styled('input')`
  display: flex;
  border-radius: 20px;
  height: 40px;
  outline: none;
  box-shadow: ${colors.shadow};
  padding: ${spaceSize.mili} ${spaceSize.hecto};
  border: 1px solid ${colors.borderColor};
  flex: 0;
  transition: all 0.4s ease-in-out;

  &:focus,
  &:hover {
    box-shadow: ${colors.shadowHover};
    flex: 0.7;
  }
`;
