import Button from '@mui/material/Button';
import cocktail from '../images/Partyi/cocktail.jpg';
import bachelor from '../images/Partyi/bachelor.jpg';
import newyear from '../images/Partyi/newyear.jpg';
import anniversary from '../images/Partyi/anniversary.jpg';
import independance from '../images/Partyi/independance.jpg';
import kitty from '../images/Partyi/kitty.jpg';
export const PartiesFile=[{ 
  img:<img src={cocktail} width="306" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:1, 
  name:"Cocktail-Party", 
  price:"Rs. 90,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={bachelor} width="295" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>,  
  uuid:3, 
  name:"Bachelor Party", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={newyear} width="305" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:4, 
  name:"New Year Party", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={anniversary} width="300" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:5, 
  name:"Anniversary Celebrations", 
  price:"Rs. 1,50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={kitty} width="300" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:2, 
  name:"Kitty Party", 
  price:"Rs. 70,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={independance} width="305" height="200" style={{border:'5px outset orange', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:6, 
  name:"Independence Day Celebrations", 
  price:"Rs. 1,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
}
]