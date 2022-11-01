import styled from 'styled-components';
import { colors } from '../../Theme';

export const StyledFooter = styled.footer`
  background-color: ${colors.footer};
  height: ${({ theme }) => theme.sizes.footerHeight};
`;
