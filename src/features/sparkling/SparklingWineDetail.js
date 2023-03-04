import React from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { useSelector } from "react-redux";
import { selectSparklingById } from "./sparklingsSlice";
import { useParams } from "react-router-dom";

const SparklingWineDetail = () => {
  const { id } = useParams();
  const sparkling = useSelector((state) => selectSparklingById(state, id));

  return (
    <Col xs={12} sm={8} md={6}>
      <Card>
        <CardImg top width="100%" src={sparkling.image} alt={sparkling.name} />
        <CardBody>
          <CardText>{sparkling.Price}</CardText>
          <CardText>{sparkling.varietal}</CardText>
          <CardText>{sparkling.notes}</CardText>
          <CardText>{sparkling.region}</CardText>
          <CardText>{sparkling.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SparklingWineDetail;
