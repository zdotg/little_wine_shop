import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const SkincontactDetail = ( {red} ) => {
    const { image, name, description } = skincontact;

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

export default SkincontactDetail;
