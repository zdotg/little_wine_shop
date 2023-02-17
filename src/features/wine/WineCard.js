import React from 'react'
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap'
import { Link } from 'react-router-dom'

const WineCard = ({ id, name, image }) => (
  <Link to={`/db-wineshop.json/${id}`}>
    <Card>
      <CardImg top width="100%" src={image} alt={name} />
      <CardImgOverlay>
        <CardTitle>{name}</CardTitle>
      </CardImgOverlay>
    </Card>
  </Link>
)

export default WineCard
