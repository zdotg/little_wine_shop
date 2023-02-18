import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import React from 'react';
import {Routes, Route} from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.css';


import { fetchReds } from './features/red/redsSlice';
import { fetchWhites } from './features/white/whitesSlice';
import { fetchPromotions } from './features/promotions/promotionsSlice';
import { fetchSkincontacts } from './features/skincontact/skincontactsSlice';
import { fetchRoses } from './features/rose/rosesSlice';
import { fetchPiquettes } from './features/piquette/piquettesSlice';
import { fetchSparklings } from './features/sparkling/sparklingsSlice';
import { fetchPetnats } from './features/petnat/petnatsSlice';
import { fetchMerch } from './misc/merchSlice';

import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ShopAllPage from './pages/ShopAllPage';
import ShopPetnatsPage from './pages/lists/ShopPetnat';
import ShopPiquettesPage from './pages/lists/ShopPiquette';
import ShopSkinContactsPage from './pages/lists/ShopSkinContact';
import ShopRedsPage from './pages/lists/ShopRed';
import ShopRosesPage from './pages/lists/ShopRose';
import ShopSparklingsPage from './pages/lists/ShopSparkling';
import ShopWhitesPage from './pages/lists/ShopWhite';
import ShopMerchPage from './pages/lists/ShopMerch';



function App() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchReds());
      dispatch(fetchPromotions());
      dispatch(fetchSkincontacts());
      dispatch(fetchRoses());
      dispatch(fetchWhites());
      dispatch(fetchPiquettes());
      dispatch(fetchSparklings());
      dispatch(fetchPetnats());
      dispatch(fetchMerch())
    }, [dispatch]);
    
    return (
      <div className="App">
          <Header />
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='shopall' element={<ShopAllPage />} />
              <Route path='merch' element={<ShopMerchPage />} />
              <Route path='red' element={<ShopRedsPage />} />
              <Route path='white' element={<ShopWhitesPage />} />
              <Route path='rose' element={<ShopRosesPage />} />
              <Route path='skinContact' element={<ShopSkinContactsPage />} />
              <Route path='petnat' element={<ShopPetnatsPage />} />
              <Route path='sparkling' element={<ShopSparklingsPage />} />
              <Route path='piquette' element={<ShopPiquettesPage />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
