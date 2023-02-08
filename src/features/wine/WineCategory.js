import React from 'react';

const WineCategory = ({ category, wines }) => {
  return (
    <div>
      <h2>{category}</h2>
      <ul>
        {wines.map(({ id, name, image, year, region, varietal, notes }) => (
          <li key={id}>
            <h3>{name}</h3>
            <img src={image} alt={name} />
            <p>Year: {year}</p>
            <p>Region: {region}</p>
            <p>Varietal: {varietal}</p>
            <p>Notes: {notes}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WineCategory;






