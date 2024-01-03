import styled from '@emotion/styled';
import { Box } from '@mui/material';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

export const VerticalMenuWrapper = styled(ToggleButtonGroup)`
  width: 40%;
  margin-left: -12px;
`;

export const VerticalMenuItem = styled(Box)`
  transition: all 0.2s ease-in;

  &.active {
    border-left: 5px solid #574efa;
    color: #574efa;
  }

  &:hover {
    background-color: #f4f4f4;
    cursor: pointer;
    transition: all 0.2s ease-in;
  }
`;
