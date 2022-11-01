import styled from 'styled-components';
import { Link } from 'react-router-dom'
import { devices } from '../../Theme';

export const StyledSignup = styled.section`
  min-height: calc(
    100vh - ${({ theme }) => theme.sizes.headerHeight} - ${({ theme }) => theme.sizes.footerHeight}
  );
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  z-index: 1;
`;

export const Title = styled.h1`
  font-size: 36px;
  color: #6f6f6f;

  @media screen and ${devices.tablet} {
    font-size: 30px;
  }
`


export const Text = styled.h3`
  font-size: 14px;
  display: flex;
  align-items: baseline;
  gap: 10px;
  color: #3c3c3c;
`

export const SLink = styled(Link)`
  text-decoration: none;
  color: greenish;
`