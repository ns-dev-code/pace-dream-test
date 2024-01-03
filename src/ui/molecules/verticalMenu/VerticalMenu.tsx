import * as React from 'react';
import {useState} from 'react';
import {Box} from '@mui/material'
import FormatAlignLeftIcon from '@mui/icons-material/FormatAlignLeft';
import FormatAlignCenterIcon from '@mui/icons-material/FormatAlignCenter';
import FormatAlignRightIcon from '@mui/icons-material/FormatAlignRight';
import FormatAlignJustifyIcon from '@mui/icons-material/FormatAlignJustify';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import {VerticalMenuItem,VerticalMenuWrapper } from './style';

export default function ToggleButtons() {
  const [alignment, setAlignment] = React.useState<string | null>('left');
  const [selected, setSelected] = useState(0);

  const handleAlignment = (
    event: React.MouseEvent<HTMLElement>,
    newAlignment: string | null,
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <VerticalMenuWrapper
      value={alignment}
      exclusive
      orientation="vertical"
      onChange={handleAlignment}
      aria-label="text alignment"
    >
     <Box ml={0}>
     <VerticalMenuItem onClick={()=>setSelected(0)} className={`verticalmenu_item ${selected==0? 'active': ''}`}  p={2} aria-label="left aligned">
       Week
      </VerticalMenuItem>
      <VerticalMenuItem onClick={()=>setSelected(1)}  className={`verticalmenu_item ${selected==1? 'active': ''}`}  p={2} aria-label="centered">
        Month
      </VerticalMenuItem>
      <VerticalMenuItem onClick={()=>setSelected(2)}  className={`verticalmenu_item ${selected==2? 'active': ''}`} p={2} aria-label="right aligned">
        Year
      </VerticalMenuItem>
      <VerticalMenuItem onClick={()=>setSelected(3)}  className={`verticalmenu_item ${selected==3? 'active': ''}`} p={2} aria-label="justified" disabled>
       Free Select
      </VerticalMenuItem>
      </Box>
    </VerticalMenuWrapper>
  );
}