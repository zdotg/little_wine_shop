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
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import ShopAllPage from './pages/ShopAllPage';
import { fetchSparklings } from './features/sparkling/sparklingsSlice';
import { fetchPetnats } from './features/petnat/petnatsSlice';



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
    }, [dispatch]);
    
    return (
      <div className="App">
          <Header />
          <Routes>
              <Route path='/' element={<HomePage />} />
              <Route path='contact' element={<ContactPage />} />
              <Route path='about' element={<AboutPage />} />
              <Route path='shopall' element={<ShopAllPage />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
