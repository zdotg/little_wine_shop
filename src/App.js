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
import { fetchSkinContacts } from './features/skincontact/skincontactsSlice';


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchReds());
      dispatch(fetchPromotions());
      dispatch(fetchSkinContacts());
      dispatch(fetchWhites());
    }, [dispatch]);
    
    return (
      <div className="App">
          <Header />
          <Routes>
              <Route path='/' element={<HomePage />} />
          </Routes>
          <Footer />
      </div>
  );
}

export default App;
