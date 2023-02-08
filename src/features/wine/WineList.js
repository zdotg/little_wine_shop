import React, { useEffect, useState } from 'react';
import { Col, Row } from 'reactstrap';
import WineCard from './WineCard';
import Error from '../../components/Error';
import Loading from '../../components/Loading';
import baseUrl from '../../shared/baseUrl';

const WineList = ({ category }) => {
  const [wines, setWines] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${baseUrl}/db-wineshop.json`)
      .then(response => response.json())
      .then(wines => {
        const categoryWines = wines.filter(wine => wine.category === category);
        setWines(categoryWines);
        setLoading(false);
      })
      .catch(error => {
        setError(true);
        setLoading(false);
      });
  }, []);

  if (error) {
    return <Error />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <Row>
      {wines.map(wine => (
        <Col xs={12} sm={6} md={4} key={wine.id}>
          <WineCard wine={wine} />
        </Col>
      ))}
    </Row>
  );
};

export default WineList;
