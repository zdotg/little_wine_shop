import React from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { selectWhiteById } from "./whitesSlice";
import { useParams } from "react-router-dom";

const WhiteWineDetail = () => {
  const { id } = useParams();
  const white = useSelector((state) => selectWhiteById(state, id));

  return (
    <Col xs={12} sm={8} md={6}>
      <Card>
        <CardImg top src={white.image} alt={white.name} />
        <CardBody>
          <CardText>{white.Price}</CardText>
          <CardText>{white.varietal}</CardText>
          <CardText>{white.notes}</CardText>
          <CardText>{white.region}</CardText>
          <CardText>{white.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WhiteWineDetail;
