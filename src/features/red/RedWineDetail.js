import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const RedWineDetail = ( {red} ) => {
    const { image, name, region} = red;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{region}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default RedWineDetail;
