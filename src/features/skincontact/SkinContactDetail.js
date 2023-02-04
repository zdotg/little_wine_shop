import { Card, CardImg, CardText, CardBody, Col } from 'reactstrap';

const SkincontactDetail = ( {skincontact} ) => {
    const { image, name, region } = skincontact;

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

export default SkincontactDetail;
