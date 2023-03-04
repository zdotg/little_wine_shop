import React from "react";
import { Card, CardImg, CardText, CardBody, Col } from "reactstrap";
import { selectSkinContactById } from "./skincontactsSlice";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

const SkinContactWineDetail = () => {
  const { id } = useParams();
  const skincontact = useSelector((state) => selectSkinContactById(state, id));

  return (
    <Col xs={12} sm={8} md={6}>
      <Card>
        <CardImg
          top
          width="100%"
          src={skincontact.image}
          alt={skincontact.name}
        />
        <CardBody>
          <CardText>{skincontact.Price}</CardText>
          <CardText>{skincontact.varietal}</CardText>
          <CardText>{skincontact.notes}</CardText>
          <CardText>{skincontact.region}</CardText>
          <CardText>{skincontact.description}</CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SkinContactWineDetail;
