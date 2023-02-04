import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const RoseDetail = ( {rose} ) => {
    const { image, name, description } = rose;

    return (
        <Col md='5' className='m-1'>
            <Card>
                <CardImg top src={image} alt={name} />
                <CardBody>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

export default RoseDetail;
