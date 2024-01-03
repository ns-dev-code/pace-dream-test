import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';


type BasicButtonsProps = {
  title: string 
}
export default function BasicButtons(props: BasicButtonsProps) {
  return (
    <Stack spacing={2} direction="row">
      <Button className="rounded-pill" variant="outlined">
        {props.title ? props.title : 'Button' }
      </Button>
    </Stack>
  );
}
