import React from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { selectRedById } from "./redsSlice";
import { useParams } from "react-router-dom";

const RedWineDetail = () => {
  const { id } = useParams();
  const red = useSelector((state) => selectRedById(state, id));

  return (
    <Col xs={12} sm={8} md={6}>
      <Card>
        <CardImg top width="100%" src={red.image} alt={red.name} />
        <CardBody>
          <CardText>{red.Price}</CardText>
          <CardText>{red.varietal}</CardText>
          <CardText>{red.notes}</CardText>
          <CardText>{red.region}</CardText>
          <CardText>{red.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RedWineDetail;
