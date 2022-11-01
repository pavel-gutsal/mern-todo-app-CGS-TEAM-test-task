import styled from 'styled-components';
import { spaceSize } from '../../Theme';

export const CheckBoxWrapper = styled.div`
  position: relative;
  width: 60px;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 3px;
  left: 3px;
  width: 60px;
  height: 32px;
  border-radius: 15px;
  background: #bebebe;
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 25px;
    height: 25px;
    margin: 3px;
    background: #ffffff;
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: all 0.3s ease-in-out;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 60px;
  height: 32px;

  &:checked + ${CheckBoxLabel} {
    background: #49c478;
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 25px;
      height: 25px;
      margin-left: ${spaceSize.double};
    }
  }
`;
