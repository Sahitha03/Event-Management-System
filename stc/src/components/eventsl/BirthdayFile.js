import Button from '@mui/material/Button';
import circus from '../images/Birthdayi/circustheme.jpg';
import princesstheme from '../images/Birthdayi/princesstheme.jpg';
import gamingtheme from '../images/Birthdayi/gamingtheme.jpg';
import superherotheme from '../images/Birthdayi/superherotheme.jpg';
import opentheme from '../images/Birthdayi/opentheme.jpg';
import banquettheme from '../images/Birthdayi/banquettheme.jpg';
const BirthdayFile=[
  { 
    img:<img src={circus} width="310" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:2, 
    name:"Circus Birthdays", 
    price:"Rs. 60,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  { 
    img:<img src={princesstheme} width="290" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>,  
    uuid:3, 
    name:"Princes Birthdays", 
    price:"Rs. 70,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  { 
    img:<img src={gamingtheme} width="290" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:4, 
    name:"Games Birthdays", 
    price:"Rs. 30,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button> 
  }, 
  { 
    img:<img src={superherotheme} width="270" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:1, 
    name:"Super Heroes Birthdays", 
    price:"Rs. 50,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button> 
  }, 
  { 
    img:<img src={opentheme} width="310" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:5, 
    name:"Grand Birthday Celebrations", 
    price:"Rs. 1,00,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  { 
    img:<img src={banquettheme} width="310" height="200" style={{border:'5px outset red', borderRadius: '20px', borderWidth:"5px"}}/>, 
    uuid:6, 
    name:"Banquent Hall Birthdays", 
    price:"Rs. 1,20,000/-", 
    available:true,
    button: <Button variant="contained">More info</Button>
  },
  ]

 export default BirthdayFile;