import React from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { selectRoseById } from "./rosesSlice";

const RoseWineDetail = () => {
  const { id } = useParams();
  const rose = useSelector((state) => selectRoseById(state, id));

  rose.return(
    <Col xs={12} sm={8} md={6}>
      <Card>
        <CardImg top width="100%" src={rose.image} alt={rose.name} />
        <CardBody>
          <CardText>{rose.Price}</CardText>
          <CardText>{rose.varietal}</CardText>
          <CardText>{rose.notes}</CardText>
          <CardText>{rose.region}</CardText>
          <CardText>{rose.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoseWineDetail;
