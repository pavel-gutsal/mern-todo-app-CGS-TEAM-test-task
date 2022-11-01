import React from 'react';
import { CheckBoxWrapper, CheckBox, CheckBoxLabel } from './ToggleSwitch.styles';

type Props = {
  id: string;
  check?: boolean;
  onClickFunction?: () => void;
};

export const ToggleSwitch: React.FC<Props> = ({ id, check, onClickFunction }) => {
  return (
    <CheckBoxWrapper>
      <CheckBox id={id} type="checkbox" checked={check || false} />
      <CheckBoxLabel
        htmlFor={id}
        onClick={onClickFunction}
      />
    </CheckBoxWrapper>
  );
};
