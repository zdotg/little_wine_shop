import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Container } from "reactstrap";
import SubHeader from "../components/SubHeader";
import RedWineDetail from "../features/red/RedWineDetail";
import WhiteWineDetail from "../features/white/WhiteWineDetail";
import RoseWineDetail from "../features/rose/RoseWIneDetail";
import SparklingWineDetail from "../features/sparkling/SparklingWineDetail";
import SkinContactWineDetail from "../features/skincontact/SkinContactDetail";
import PiquetteWineDetail from "../features/piquette/PiquetteWineDetail";
import PetnatWineDetail from "../features/petnat/PetnatWineDetail";

const WineDetailsPage = () => {
  const { id } = useParams();

  const [wines, setWines] = useState([]);

  useEffect(() => {
    const fetchWines = async () => {
      const response = await fetch("/db-wineshop.json");
      const data = await response.json();
      setWines(data);
    };
    fetchWines();
  }, []);

  const wine = wines.find((wine) => wine.id === parseInt(id));

  let wineDetailComponent;
  switch (wine.type) {
    case "red":
      wineDetailComponent = <RedWineDetail wine={wine} />;
      break;
    case "white":
      wineDetailComponent = <WhiteWineDetail wine={wine} />;
      break;
    case "rose":
      wineDetailComponent = <RoseWineDetail wine={wine} />;
      break;
    case "sparkling":
      wineDetailComponent = <SparklingWineDetail wine={wine} />;
      break;
    case "petnat":
      wineDetailComponent = <PetnatWineDetail wine={wine} />;
      break;
    case "piquette":
      wineDetailComponent = <PiquetteWineDetail wine={wine} />;
      break;
    case "skincontact":
      wineDetailComponent = <SkinContactWineDetail wine={wine} />;
      break;
    default:
      wineDetailComponent = <div>unknown wine type</div>;
  }

  return (
    <Container>
      <SubHeader current={wine?.name} />
      {wine && wineDetailComponent}
    </Container>
  );
};

export default WineDetailsPage;
