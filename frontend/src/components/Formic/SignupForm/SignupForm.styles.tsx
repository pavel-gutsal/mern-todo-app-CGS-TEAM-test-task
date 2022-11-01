import styled from 'styled-components';
import { spaceSize, colors, devices } from '../../../Theme';
import { Button } from '../../../GlobalStyles/GlobalStyles';

export const Form = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  @media screen and ${devices.tablet} {
    width: 95%;
  }

  @media screen and ${devices.mobileL} {
    width: 90%;
  }
`;

export const FormElement = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

export const Label = styled.label`
  padding-left: ${spaceSize.hecto};
`;

type InputBorderProp = {
  err: boolean;
};

const normalBorder = 'linear-gradient(45deg, rgba(45,38,158,1) 0%, rgba(147,147,255,1) 35%, rgba(127,233,255,1) 100%)'
const errorBorder = 'linear-gradient(45deg, rgba(158,38,38,1) 0%, rgba(255,89,89,1) 35%, rgba(255,210,210,1) 100%);'

export const InputBorder = styled.div<InputBorderProp>`
  position: relative;
  width: 100%;
  background: ${({ err }) => (err ? errorBorder : normalBorder)};
  padding: 4px;
  width: 100%;
  height: 50px;
  border-radius: 25px;

  @media screen and ${devices.tablet} {
    height: 46px;
  }
`

export const Input = styled.input`
  height: 100%;
  width: 100%;
  padding-left: 50px;
  padding-right: 20px;
  border-radius: 25px;
  outline: none;
  border: none;
`;

export const Error = styled.p`
  color: ${colors.error};
  padding: 0 ${spaceSize.hecto};
`;

export const FormLabel = styled.div`
  margin: ${spaceSize.hecto} 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const FormButton = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
`;

export const Img = styled.img`
  height: 24px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  left: 15px;
`
export const ImgEye = styled.img`
  height: 24px;
`

export const ButtonEye = styled.button`
  outline: none;
  border: none;
  background: white;
  height: 36px;
  position: absolute;
  top: 50%;
  right: 15px;
  transform: translateY( -50%);
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`

export const SButton = styled(Button)`
  width: 200px;
  max-height: 44px;

  @media screen and ${devices.tablet} {
    width: 150px;
  }
`