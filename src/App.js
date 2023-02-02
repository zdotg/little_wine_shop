import WineCard from './features/wines/WineCard';
import { 
  FULLRED, 
  LIGHTRED,
  ROSE,
  SKINCONTACT,
  WHITE
  SPARKLING 
} from './app/shared/WINES';
import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import WineShopLogo from './app/assets/img/shop.png'; 


function App() {
  return (
    <div className="App">
      <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={WineShopLogo} alt='Little Wine Shop logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
      Little Wine Shop
    </div>
  );
}

export default App;
