import styled, { createGlobalStyle, keyframes } from 'styled-components';
import { fontSize, colors, spaceSize } from '../Theme';

const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600;700&display=swap');
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: ${colors.fontGlobal};
    font-size: ${fontSize.regular};
    font-weight: 400;
    font-family: 'Poppins', Arial, Helvetica, sans-serif;
  }

  img {
    max-width: 100%;
  }
`;

type ButtonProps = {
  bgColor?: string;
};

const appear = keyframes`
 0% { background: #fff; height: 0; width: 0; opacity: 0.5; }
 100% { background: #fff; height: 200px; width: 200px; opacity: 0; }
`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  background: ${({ bgColor }) => bgColor || '#ffc43d'};
  padding: ${spaceSize.mili} ${spaceSize.hecto};
  min-width: 60px;
  color: white;
  outline: none;
  border: none;
  overflow: hidden;
  position: relative;
  box-shadow: 0 0 5px 0 #3c3c3c40;
  transition: box-shadow 0.3s ease-in-out;

  &:before {
    border-radius: 50%;
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 0%;
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &:hover:before,
  &:focus:before {
    height: 500%;
    animation: ${appear};
    animation-duration: 1s;
  }
  &:hover,
  &:focus {
    cursor: pointer;
    box-shadow: 0 0 10px 0 #2e2e2e7c;
  }
`;

export default GlobalStyles;
