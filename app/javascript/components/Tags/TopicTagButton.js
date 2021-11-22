import * as React from 'react';
import Stack from '@mui/material/Stack';
import ButtonUnstyled, { buttonUnstyledClasses } from '@mui/core/ButtonUnstyled';
import { styled } from '@mui/system';

const TopicskillTagButton = styled('button')`
  background-color: #EBF4F4;
  padding: 10px 15px;
  border-radius: 10px;
  color: #000000;
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

function TopicskillCustomButton(props) {
  return <ButtonUnstyled {...props} component={TopicskillTagButton} />;
}

export default function UnstyledButtonsSimple() {
  return (
    <Stack spacing={2} direction="row" sx={{ p: 1 }}>
      <TopicskillCustomButton >SaaS</TopicskillCustomButton>
    </Stack>
  );
}