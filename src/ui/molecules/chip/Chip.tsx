import * as React from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

export default function ColorChips() {
  return (
    <Stack spacing={1}>
      <Stack direction="row" spacing={1}>
        <Chip label="Love Hotel" size="small" color="primary" variant="outlined" />
        <Chip label="Hourly Basis Available" size="small" color="success" variant="outlined" />
      </Stack>
    </Stack>
  );
}
