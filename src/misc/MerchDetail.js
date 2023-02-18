import React from 'react';
import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';



const MerchDetail = ({ merch }) => {
  const { image, name, description } = merch;

  return (
    <Col xs={12} sm={8} md={6}>
        <Card>
            <CardImg top src={image} alt={name} />
            <CardBody>
                <CardText>{name}</CardText>
                <CardText>{description}</CardText>
            </CardBody>
        </Card>
    </Col>
  );
};

export default MerchDetail;
