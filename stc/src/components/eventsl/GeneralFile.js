import Button from '@mui/material/Button';
import promotion from '../images/Generali/promotion.jpg';
import dinner from '../images/Generali/dinner.jpg';
import academic from '../images/Generali/academic.jpg';
import flashmob from '../images/Generali/flashmob.jpg';
import babyshower from '../images/Generali/babyshower.jpg';
import house from '../images/Generali/house.jpg';

export const GeneralFile=[
  { 
    img:<img src={promotion} width="310" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:4, 
    name:"Movie Promotions", 
    price:"Rs. 5,00,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button> 
  }, 
  
{ 
  img:<img src={dinner} width="290" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:2, 
  name:"Candle Light Dinner", 
  price:"Rs. 1,75,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={academic} width="310" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>,  
  uuid:3, 
  name:"Academic Events", 
  price:"Rs. 4,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={flashmob} width="300" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:5, 
  name:"Flash Mobs", 
  price:"Rs. 55,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={babyshower} width="294" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:1, 
  name:"Baby Shower", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={house} width="300" height="200" style={{border:'5px outset deepPink', borderRadius: '20px', borderWidth:"5px"}}/>,
  uuid:6, 
  name:"House Warming", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
}
]