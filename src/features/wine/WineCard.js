import {Card, CardImg, CardImgOverlay,CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

const WineCard = ({wine}) =>{
    const { id, image, name } = wine;
    return (
        <Link to={`${id}`}>
            <Card>
                <CardImg
                    width ='100%'
                    src={image}
                    alt={name}
                />
                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>
            </Card>
        </Link>
    );
};

export default WineCard;