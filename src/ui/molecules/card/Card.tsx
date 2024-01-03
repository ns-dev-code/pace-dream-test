import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import QuantityInput from '../setcount/Setcount';
import CustomizedSwitches from '../switch/Switch';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const card = (
  <React.Fragment>
    <CardContent >
      <Box className="row">
        <Box className="col-md-8">
        <Typography
        variant="h5"
        sx={{ fontSize: 14 }}
        color="text.secondary"
        gutterBottom
      ></Typography>
      <Typography  sx={{ fontSize: '1.25rem',fontWeight: '500' }}  marginBottom={1} variant="h3" component="Box">
        Set your price
      </Typography>
      <Typography sx={{ mb: 0.05 }} color="text.secondary">
        Cleaning Fees
      </Typography>
      <Typography variant="body2">
        This will apply to every reservation.
      </Typography>
        <Box className="row d-flex float-start my-3">
         <QuantityInput value={24} />
        </Box>

        </Box>
        <Box className="col-md-4 d-flex align-items-center justify-content-left">
        <CustomizedSwitches />
        </Box>
      </Box>
      <Box className='row'>
      <Typography variant="body2">
      Places like yours in your area usually range the cleaning fees from $25 to
      $41
    </Typography>
      </Box>
    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275, maxWidth: 550 }}>
      <Card className="rounded-4" variant="outlined">
        {card}
      </Card>
    </Box>
  );
}
