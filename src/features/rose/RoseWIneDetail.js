import React from 'react';
import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const RoseWineDetail = ({ rose }) => {
  const { image, name, varietal, notes, region, description } = rose;

  return (
    <Col xs={12} sm={8} md={6}>
        <Card>
            <CardImg top src={image} alt={name} />
            <CardBody>
                <CardText>{varietal}</CardText>
                <CardText>{notes}</CardText>
                <CardText>{region}</CardText>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    </Col>
  );
};

export default RoseWineDetail;