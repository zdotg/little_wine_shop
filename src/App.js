import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import React, { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";
import "./App.css";
import Loading from "./components/Loading";
// Select wine by id
// import { selectRedById } from "./features/red/redsSlice";
// import { selectWhiteById } from "./features/white/whitesSlice";
// import { selectRoseById } from "./features/rose/rosesSlice";
// import { selectPetnatById } from "./features/petnat/petnatsSlice";
// import { selectSparklingById } from "./features/sparkling/sparklingsSlice";
// import { selectPiquetteById } from "./features/piquette/piquettesSlice";
// import { selectSkinContactById } from "./features/skincontact/skincontactsSlice";
// fetch components via slices
import { fetchReds } from "./features/red/redsSlice";
import { fetchWhites } from "./features/white/whitesSlice";
import { fetchPromotions } from "./features/promotions/promotionsSlice";
import { fetchSkincontacts } from "./features/skincontact/skincontactsSlice";
import { fetchRoses } from "./features/rose/rosesSlice";
import { fetchPiquettes } from "./features/piquette/piquettesSlice";
import { fetchSparklings } from "./features/sparkling/sparklingsSlice";
import { fetchPetnats } from "./features/petnat/petnatsSlice";
import { fetchMerch } from "./misc/merchSlice";
// General pages
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import ShopAllPage from "./pages/ShopAllPage";
import ShopPetnatsPage from "./pages/lists/ShopPetnat";
import ShopPiquettesPage from "./pages/lists/ShopPiquette";
import ShopSkinContactsPage from "./pages/lists/ShopSkinContact";
import ShopRedsPage from "./pages/lists/ShopRed";
import ShopRosesPage from "./pages/lists/ShopRose";
import ShopSparklingsPage from "./pages/lists/ShopSparkling";
import ShopWhitesPage from "./pages/lists/ShopWhite";
import ShopMerchPage from "./pages/lists/ShopMerch";
// Individual wine detail pages

// import RedWineDetail from "./features/red/RedWineDetail";
// import WhiteWineDetail from "./features/white/WhiteWineDetail";
// import RoseWineDetail from "./features/rose/RoseWIneDetail";
// import SparklingWineDetail from "./features/sparkling/SparklingWineDetail";
// import PetnatWineDetail from "./features/petnat/PetnatWineDetail";
// import SkinContactWineDetail from "./features/skincontact/SkinContactDetail";
// import PiquetteWineDetail from "./features/piquette/PiquetteWineDetail";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await Promise.all([
          dispatch(fetchReds()),
          dispatch(fetchWhites()),
          dispatch(fetchPromotions()),
          dispatch(fetchSkincontacts()),
          dispatch(fetchRoses()),
          dispatch(fetchPiquettes()),
          dispatch(fetchSparklings()),
          dispatch(fetchPetnats()),
          dispatch(fetchMerch()),
        ]);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [dispatch]);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className="App">
      <Header />
      <Routes>
        {/* General Navigation */}
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="shopall" element={<ShopAllPage />} />
        <Route path="merch" element={<ShopMerchPage />} />
        {/* Renders all inventory for selected win type */}
        <Route path="red" element={<ShopRedsPage />} />
        <Route path="white" element={<ShopWhitesPage />} />
        <Route path="rose" element={<ShopRosesPage />} />
        <Route path="skinContact" element={<ShopSkinContactsPage />} />
        <Route path="petnat" element={<ShopPetnatsPage />} />
        <Route path="sparkling" element={<ShopSparklingsPage />} />
        <Route path="piquette" element={<ShopPiquettesPage />} />
        {/* Renders user selected wine details page */}
        <Route path="/wines/:id" component={wineDetailsComponent} />
        {/* <Route path="/red/:id" element={<RedWineDetail />} />
        <Route path="/white/:id" element={<WhiteWineDetail />} />
        <Route path="/rose/:id" element={<RoseWineDetail />} />
        <Route path="/skincontact/:id" element={<SkinContactWineDetail />} />
        <Route path="/petnat/:id" element={<PetnatWineDetail />} />
        <Route path="/piquette/:id" element={<PiquetteWineDetail />} />
        <Route path="/sparkling/:id" element={<SparklingWineDetail />} /> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
