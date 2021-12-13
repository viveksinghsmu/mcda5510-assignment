import logo from './logo.svg';
import './App.css';
import Nav from 'react-bootstrap/Nav'
import { useState } from 'react';
import Aboutme from './components/Aboutme'
import Myhometown from './components/Myhometown'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap';

function App() {
  const [menuItem, setMenuItem] = useState('Aboutme')

  return (


    <div>
  
<Container>

   <Nav variant="pills" defaultActiveKey="/">
          <Nav.Item>
            <Nav.Link eventKey="Aboutme" style={{color: menuItem==="Aboutme"?'#AF2305':'black' }} active={menuItem==="Aboutme" ? true : false} onClick={() => setMenuItem("Aboutme")}>About me</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Myhometown" style={{color: menuItem==="Myhometown"?'#AF2305':'black'}} active={menuItem==="Myhometown" ? true : false} onClick={() => setMenuItem("Myhometown")}>My town</Nav.Link>
          </Nav.Item>
        </Nav>
        {
          menuItem==="Aboutme" ? <Aboutme /> : <Myhometown />
        }

  

        </Container>
     
    </div>

          
  );
}

export default App;
