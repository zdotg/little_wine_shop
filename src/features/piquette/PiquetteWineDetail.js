import React from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { selectPiquetteById } from "./piquettesSlice";
import { useParams } from "react-router-dom";

const PiquetteWineDetail = () => {
  const { id } = useParams();
  const piquette = useSelector((state) => selectPiquetteById(state, id));

  return (
    <Col xs={12} sm={8} md={6}>
      <Card>
        <CardImg top width="100%" src={piquette.image} alt={piquette.name} />
        <CardBody>
          <CardText>{piquette.Price}</CardText>
          <CardText>{piquette.varietal}</CardText>
          <CardText>{piquette.notes}</CardText>
          <CardText>{piquette.region}</CardText>
          <CardText>{piquette.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PiquetteWineDetail;
