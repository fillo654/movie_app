import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SeletOrder from './SelectOrder';

export default function Filter() {
  return (
    <div>
      <Accordion style={{ width: '25%'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Order</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <SeletOrder />
        </AccordionDetails>
      </Accordion>
    </div>
  );
}