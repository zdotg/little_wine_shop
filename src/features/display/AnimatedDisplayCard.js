import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";
import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

const AnimatedDisplayCard = ({ item }) => {
  const { image, name, region } = item;
  const [toggle, setToggle] = useState(false);
  const animatedStyle = useSpring({
    opacity: toggle ? 1 : 0,
    transform: toggle ? "scale(1,1)" : "scale(1,0)",
    config: { duration: 500 },
  });

  useEffect(() => {
    setToggle(true);
  }, []);

  return (
    <animated.div style={animatedStyle}>
      <Card style={{ height: "500px", border: "none" }}>
        <CardImg
          width="100%"
          style={{ height: "350px", objectFit: "scale-down" }}
          src={image}
          alt={name}
        />
        <CardBody style={{ textAlign: "center" }}>
          <CardTitle>{name}</CardTitle>
          <CardText>{region}</CardText>
        </CardBody>
      </Card>
    </animated.div>
  );
};

export default AnimatedDisplayCard;
