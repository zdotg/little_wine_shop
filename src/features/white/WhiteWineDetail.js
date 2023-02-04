import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const WhiteWineDetail = ( {white} ) => {
    const { image, name, region } = white;

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

export default WhiteWineDetail;
