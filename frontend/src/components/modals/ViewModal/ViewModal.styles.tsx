import styled from 'styled-components';
import { devices, fontSize, spaceSize } from '../../../Theme';

export const ViewContainer = styled.div`
  z-index: 2;
  position: relative;
`;

export const BackGroundShade = styled.div`
  background: rgba(9, 9, 9, 0.4);
  backdrop-filter: blur(10px);
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translateX(-50%) translateY(-50%);
  z-index: 3;
  width: 70vw;
  background: white;
  border-top: 15px solid #1b9aaa;
  border-radius: 10px;
  padding: ${spaceSize.hecto} ${spaceSize.triple} ${spaceSize.double};
  word-break: break-all;

  @media screen and ${devices.laptopS} {
    width: 90vw;
  }

  @media screen and ${devices.tablet} {
    width: 95vw;
    padding: ${spaceSize.hecto} ${spaceSize.tera};
  }

  @media screen and ${devices.mobileL} {
    padding: ${spaceSize.hecto};
  }
`;

export const Label = styled.label`
  display: flex;
  align-content: center;
  height: 60px;
  cursor: pointer;
`;

export const ClosingCross = styled.img`
  width: 15px;
  height: 15px;
  position: absolute;
  top: -15px;
  right: 0;
  transition: all 0.3s ease-in-out;
  z-index: 4;

  &:hover,
  &:focus {
    cursor: pointer;
    transform: rotate(90deg);
  }
`;

export const ModalTitle = styled.h1`
  font-weight: 500;
  font-size: ${fontSize.double};
  margin-bottom: ${spaceSize.doubleHalf};

  @media screen and ${devices.laptopS} {
    font-size: ${fontSize.mega};
  }

  @media screen and ${devices.tablet} {
    font-size: ${fontSize.deka};
    margin-bottom: ${spaceSize.tera};
  }
`;

export const ModalText = styled.h3`
  display: flex;
  align-items: center;
  font-size: ${fontSize.deka};
  margin-bottom: ${spaceSize.hecto};
  width: 300px;

  @media screen and ${devices.laptopS} {
    font-size: ${fontSize.regular};
  }
`;

export const ModalDescr = styled.p`
  font-size: ${fontSize.regular};
  margin-bottom: ${spaceSize.triple};

  @media screen and ${devices.laptopS} {
    font-size: ${fontSize.deci};
  }
`;
