import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function Savechip() {
  return (
    <Stack direction='row' className='d-flex justify-content-between'>
      <Stack direction="row">
        <Chip label="Back" color="primary" variant="outlined" />
      </Stack>
      <Stack direction="row">
        <Chip label="Save" color="primary" />
      </Stack>
    </Stack>
  );
}
