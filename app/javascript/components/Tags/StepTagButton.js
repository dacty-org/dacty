import * as React from 'react';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';

const StepTagButton = styled('button')`
  background-color: #373C38;
  padding: 10px 15px;
  border-radius: 10px;
  color: #F6F7F8;
  font-weight: 600;
  font-family: Helvetica, Arial, sans-serif;
  font-size: 14px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    background-color: #0059b2;
  }

  /* クリックした際の色 */
  &.${buttonUnstyledClasses.active} {
    background-color: #004386;
  }

  &.${buttonUnstyledClasses.focusVisible} {
    box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 5px rgba(0, 127, 255, 0.5);
    outline: none;
  }

`;

function StepCustomButton(props) {
  return <ButtonUnstyled {...props} component={StepTagButton} />;
}

export default function UnstyledButtonsSimple() {
  return (
    <Stack spacing={2} direction="row" sx={{ p: 1 }}>
      <StepCustomButton >プランニング</StepCustomButton>
    </Stack>
  );
}