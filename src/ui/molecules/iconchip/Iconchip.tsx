import * as React from 'react';
import { useState } from 'react';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

type IconChipsProps = {
  data:{title:string, icon?: React.ReactElement}[]
  gap?:number
}
export default function IconChips(props: IconChipsProps) {
  const [clicked , setClicked] = useState({clicked:0})
  return (
    <Stack className={`d-flex flex-wrap gap-${props.gap|2}`}  direction="row">
      {
        props?.data?.map((item, index)=><Chip
          onClick={()=>{
            setClicked({clicked: index})
          }}
          key={item.title}
          icon={item.icon}
          label={item.title}
          color={`${clicked.clicked === index ? 'primary':'secondary'}`}
          variant={`${clicked.clicked === index ? 'contained':'outlined'}`}
        />
      )
      }
    </Stack>
  );
}
