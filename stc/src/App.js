
import event from './components/event.jpeg';

import './App.css';
import Login from './components/Login';
import Registration from './components/Registration';
import Payment from './components/Payment';
import Event from './components/eventsl/Event'
import Profile from './components/Profile'
import QR from './components/QR';
import Marriage from './components/eventsl/Marriage';
import Birthday from './components/eventsl/Birthday';
import Bussiness from './components/eventsl/Bussiness';
import General from './components/eventsl/General';
import  Festival  from './components/eventsl/Festival';
import Parties from './components/eventsl/Parties';
import Help from './components/Help';
import Home from './components/Home';
import UserHome from './components/UserHome';
import Header from './components/Wish/Header';
// import Feedback from './components/Feedback';
import Homee from './components/Wish/Homee';



import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Container } from '@mui/system';
import Authorization from './components/Authorization';
//import ProductList from './components/wishList/ProductList';
import Salert from './components/Alerts/Salert';
import Felert from './components/Alerts/Felert';
function App() {
    return (
    <div>
    <div className='App-header'>
    <img src={event} style={{width:"130px",height:"130px"}}/>
      <h1>EVENT MANAGEMENT SYSTEM</h1>
    </div>
    <div className='App-body'>
      <Container>
       <Home/>
      <BrowserRouter>
        <Routes>
        <Route path="log" element={<Login/>}/>
          <Route path="reg" element={<Registration/>}/>
          <Route path="pay" element={<Payment/>}/>
          <Route path="eve" element={<Event/>}/>
          <Route path="pro" element={<Profile/>}/>
          <Route path="Qr" element={<QR/>}/>
          <Route path="hel" element={<Help/>}/>
          <Route path="use" element={<UserHome/>}/>
          <Route path="hea" element={<Header/>}/>
          <Route path="hom" element={<Homee/>}/>
          {/* <Route path="pro" element={<ProductList/>}/> */}
          {/* <Route path="fee" element={<Feedback/>}/> */}
          
          



          
          <Route path="/Marriage" element={<Marriage/>}/>
          <Route path="/Birthday" element={<Birthday/>}/>
          <Route path="/Bussiness" element={<Bussiness/>}/>
          <Route path="/General" element={<General/>}/>
          <Route path="/Festival" element={<Festival/>}/>
          <Route path="/Parties" element={<Parties/>}/>
          <Route path="/Salert" element={<Salert/>}/>
          <Route path="/Felert" element={<Felert/>}/>

        
          
          
        </Routes>    
      </BrowserRouter>
      </Container>


    </div>
    </div>
  );
}

export default App;