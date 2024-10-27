import React from 'react'
import { Button } from '@mui/material';
import { useState } from 'react';
import { FestivalFile } from './FestivalFile';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material'
import ArrowCircleLeftRounded from '@mui/icons-material/ArrowCircleLeftRounded';
import '../images/static/event.css';
function Festival() {
  const [dept, setDept] = useState(FestivalFile)
  const changeView = (dep) => { setDept(dep); }
  return (
    <div className="App">
      <div className='events'>
      <br/>
      <Button variant="contained" sx={{ color: 'black', backgroundColor: 'orange' ,position:"relative", right:"700px"}} href='eve' position='relative' ><ArrowCircleLeftRounded/></Button>
      <br/><br/>
      <Grid 
              container 
              spacing={5} 
              direction="row" 
              justify="flex-start" 
              alignItems="flex-start" 
              gap={5}
          > 
      {FestivalFile.map((mb) => (<Grid sx={{ minWidth: 400, minHeight: 300, margin: 6, border: '4px outset black', borderRadius: 5, backgroundColor: "Yellow", fontFamily:"Times new roman", fontSize:"20px" , borderWidth:"3px"}} item xs={12} sm={6} md={3} key={mb.id}>{mb.img}<br/>Name:{mb.name}<br/>Price:{mb.price}<br/> 
      Available: {mb.available 
   ?"Yes" : "No"}<br/><br/>{mb.button}</Grid>))} 
  </Grid>
    </div >
    </div>
  );
}
export default Festival;