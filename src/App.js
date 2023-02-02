// import Header from './components/Header';
// import Footer from './components/Footer';
import React from 'react';
// import {Routes, Route} from 'react-router-dom';
// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import './App.css';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import WineShopLogo from './app/assets/img/shop.png'; 


function App() {
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchWines());
  // })
  return (
    <div className="App">
      {/* <Header /> */}
      <Navbar dark color='primary' sticky='top' expand='md'>
                <Container>
                    <NavbarBrand href='/'>
                        <img src={WineShopLogo} alt='Little Wine Shop logo' />
                    </NavbarBrand>
                </Container>
            </Navbar>
    </div>
  );
}

export default App;
