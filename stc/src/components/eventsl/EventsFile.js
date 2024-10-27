import Button from '@mui/material/Button';
import marriage from '../images/Eventslist/marriage.jpg'
import birthday from '../images/Eventslist/birthday.jpg'
import bussiness from '../images/Eventslist/bussiness.jpg'
import festival from '../images/Eventslist/festival.jpg'
import general from '../images/Eventslist/general.jpg'
import parties from '../images/Eventslist/parties.jpg'
export const EventsFile=[{ 
  img:<img src={marriage} width="300" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:1, 
  name:"Marriage Functions", 
  button: <Button variant="contained" href="/Marriage">More Details</Button> 
}, 
{ 
  img:<img src={birthday} width="300" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:2, 
  name:"Birthday Events", 
  button: <Button variant="contained" href="/Birthday">More Details</Button>
},
{ 
  img:<img src={bussiness} width="300" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>,  
  uuid:3, 
  name:"Business Events", 
  button: <Button variant="contained"  href="/Bussiness">More Details</Button>
},
{ 
  img:<img src={festival} width="300" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:4, 
  name:"Festival Celebrations", 
  button: <Button variant="contained"  href="/Festival">More Details</Button> 
}, 
{ 
  img:<img src={general} width="320" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:5, 
  name:"General Events", 
  button: <Button variant="contained"  href="/General">More Details</Button>
},
{ 
  img:<img src={parties} width="300" height="200" style={{border:'5px outset Lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:6, 
  name:"Parties", 
  button: <Button variant="contained"  href="/Parties">More Details</Button>
}]