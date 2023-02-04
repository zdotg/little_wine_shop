import {Card, CardImg, CardImgOverlay,CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

const WhiteWineCard = ({white}) =>{
    const { id, image, name } = white;
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

export default WhiteWineCard;