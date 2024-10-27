import Button from '@mui/material/Button';
import holi from '../images/Festivali/holi.jpg';
import christamas from '../images/Festivali/christamas.jpg';
import ganesh from '../images/Festivali/ganesh.jpg';
import sankranthi from '../images/Festivali/sankranthi.jpg';
import diwali from '../images/Festivali/diwali.jpg';
import dusserrah from '../images/Festivali/duserrah.jpg';

export const FestivalFile=[
  { 
    img:<img src={holi} width="300" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:4, 
    name:"Holi", 
    price:"Rs. 60,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button> 
  }, 
  { 
    img:<img src={christamas} width="300" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:5, 
    name:"Christamas", 
    price:"Rs. 85,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  { 
    img:<img src={ganesh} width="300" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:6, 
    name:"Ganesh Chathurthi", 
    price:"Rs. 5,00,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  { 
  img:<img src={sankranthi} width="280" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:1, 
  name:"Sankranthi", 
  price:"Rs. 1,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={diwali} width="300" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:2, 
  name:"Diwali", 
  price:"Rs. 50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={dusserrah} width="315" height="200" style={{border:'5px outset cyan', borderRadius: '20px', borderWidth:"5px"}}/>,  
  uuid:3, 
  name:"Dusshera", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
]