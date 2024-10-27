import React from 'react'
import { Button, ButtonGroup } from '@mui/material';
import { useState } from 'react';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material'
import '../images/static/event.css';
import ArrowCircleLeftRounded from '@mui/icons-material/ArrowCircleLeftRounded';
import { MarriageFile } from './MarriageFile';
function Marriage() {
  const [dept, setDept] = useState(MarriageFile)
  const changeView = (dep) => { setDept(dep); }
  return (
    <div className="App">
      <div className='events'>
      <br/>
      <Button variant="contained" sx={{ color: 'black', backgroundColor: 'orange' ,position:"relative", right:"700px"}} href='eve' position='relative' ><ArrowCircleLeftRounded/></Button>
      <Grid 
              container 
              spacing={4} 
              direction="row" 
              justify="flex-start" 
              alignItems="flex-start" 
              gap={5}
          > 
      {MarriageFile.map((mb) => (<Grid sx={{minWidth: 400, maxHeight: 480, margin: 6, border: '4px outset black', borderRadius: 5, backgroundColor: "tomato", fontFamily:"Times new roman", fontSize:"20px", borderWidth:"3px"}} item xs={12} sm={6} md={3} key={mb.id}>{mb.img}<br/>Name:{mb.name}<br/>Price:{mb.price}<br/> 
      Available: {mb.available 
   ?"Yes" : "No"}<br/><br/>{mb.button}&nbsp;&nbsp;&nbsp;{mb.like}</Grid>))} 
  </Grid>
    </div >
    </div>
  );
}
export default Marriage;