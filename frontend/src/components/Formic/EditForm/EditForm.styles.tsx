import styled from 'styled-components';
import { colors, spaceSize } from '../../../Theme';

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: ${spaceSize.regular};
`;

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${spaceSize.nano};
`;

export const Label = styled.label`
  padding-left: ${spaceSize.hecto};
`;

type InputProp = {
  err?: boolean;
};

export const Input = styled.input<InputProp>`
  padding: ${spaceSize.mili} ${spaceSize.hecto};
  border-radius: 20px;
  outline: none;
  border: 1px solid ${({ err }) => (err ? 'tomato' : 'black')};
`;

export const TextArea = styled.textarea<InputProp>`
  resize: none;
  min-height: 60px;
  padding: ${spaceSize.mili} ${spaceSize.hecto};
  border-radius: ${spaceSize.hecto};
  outline: none;
  border: 1px solid black;
  border: 1px solid ${({ err }) => (err ? 'tomato' : 'black')};

  &::-webkit-scrollbar {
    width: 0px;
    background: transparent;
  }
`;

export const Error = styled.p`
  color: ${colors.error};
  padding-left: ${spaceSize.hecto};
`;

export const FormLabel = styled.div`
  margin: ${spaceSize.hecto} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormButton = styled.div``;
