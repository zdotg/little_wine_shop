import { Card, CardImg, CardimgOverlay, CardTitle  } from "reactstrap";

const WineCard = (props) => {
    return (
        <Card>
            <CardImg 
                width='100%'
                src={props.wine.image}
                alt={props.wine.name}
            />
            <CardimgOverlay>
                <CardTitle>{props.wine.name}</CardTitle>
            </CardimgOverlay>
        </Card>
    )
};

export default WineCard;