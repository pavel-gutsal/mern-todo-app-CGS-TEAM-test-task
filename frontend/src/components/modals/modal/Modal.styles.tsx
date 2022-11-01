import styled from 'styled-components';
import { ModalWrapper } from '../ViewModal/ViewModal.styles';
import { devices } from '../../../Theme';

export const ModalContainer = styled(ModalWrapper)`
  width: 600px;

  @media screen and ${devices.tablet} {
    width: 95vw;
  }
`;
