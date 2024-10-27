import Button from '@mui/material/Button';
import tradeshow from '../images/Businessi/tradeshow.jpg';
import product from '../images/Businessi/product.jpg';
import board from '../images/Businessi/boardmeeting.jpg';
import appreciation from '../images/Businessi/boardmeeting.jpg';
import sport from '../images/Businessi/sports.jpg';
import inaugaration from '../images/Businessi/inaugaration.jpg';
export const BussinessFile=[{ 
  img:<img src={tradeshow} width="300" height="200" style={{border:'5px outset lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:1, 
  name:"Trade Shows", 
  price:"Rs. 90,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={product} width="310" height="200" style={{border:'5px outset lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:2, 
  name:"Product Launching", 
  price:"Rs. 1,20,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={board} width="290" height="200" style={{border:'5px outset lime', borderRadius: '20px', borderWidth:"5px"}}/>,  
  uuid:3, 
  name:"Board Meetings", 
  price:"Rs. 30,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={appreciation} width="290" height="200" style={{border:'5px outset lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:4, 
  name:"Appreciation Function", 
  price:"Rs. 1,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button> 
}, 
{ 
  img:<img src={sport} width="310" height="200" style={{border:'5px outset lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:5, 
  name:"Sports Tournament", 
  price:"Rs. 2,50,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
},
{ 
  img:<img src={inaugaration} width="300" height="200" style={{border:'5px outset lime', borderRadius: '20px', borderWidth:"5px"}}/>, 
  uuid:6, 
  name:"Inaugaration Function", 
  price:"Rs. 2,00,000/-", 
  available:true,
  button: <Button variant="contained">More info</Button>
}
]