import React from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { selectPetnatById } from "./petnatsSlice";
import { useParams } from "react-router-dom";

const PetnatWineDetail = () => {
  const { id } = useParams();
  const petnat = useSelector((state) => selectPetnatById(state, id));

  return (
    <Col xs={12} sm={8} md={6}>
      <Card>
        <CardImg top width="100%" src={petnat.image} alt={petnat.name} />
        <CardBody>
          <CardText>{petnat.Price}</CardText>
          <CardText>{petnat.varietal}</CardText>
          <CardText>{petnat.notes}</CardText>
          <CardText>{petnat.region}</CardText>
          <CardText>{petnat.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PetnatWineDetail;
