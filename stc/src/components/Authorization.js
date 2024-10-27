
import Login  from './Login';
import Registration from './Registration';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Auth from './Auth';
import { Container } from '@mui/system';

function Authorization() {
    return (
    <div>
    <div className='app-body'>
      <Container>
        <Auth/>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/" element={<Registration/>}/>
        </Routes>    
      </BrowserRouter>
      </Container>  


    </div>
    </div>
  );
}

export default Authorization;