import React from 'react'
import { Button } from '@mui/material';
import { useState } from 'react';
import { EventsFile } from './EventsFile.js';
import { Stack } from '@mui/material';
import { Grid } from '@mui/material'
import '../images/static/event.css';
import '../images/static/event.css';
function Event() {
  const [dept, setDept] = useState(EventsFile)
  const changeView = (dep) => { setDept(dep); }
  return (
    <div className="App">
      <div className='events'>
    
      <br/>
      <Grid 
              container 
              spacing={4} 
              direction="row" 
              justify="flex-start" 
              alignItems="flex-start" 
              gap={5}
          > 
      {EventsFile.map((mb) => (<Grid sx={{minWidth: 400, minHeight: 350, margin: 6, border: '4px outset black', borderRadius: 5, backgroundColor: "lightblue", fontFamily:"Times new roman", fontSize:"20px", borderWidth:"3px", fontWeight:"Bold"}} item xs={12} sm={6} md={3} key={mb.id}>{mb.img}<br/>{mb.name}<br/><br/>{mb.button}&nbsp;&nbsp;&nbsp;{mb.like}</Grid>))} 
  </Grid>
    </div >
    </div>
  );
}
export default Event;