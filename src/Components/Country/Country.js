import React from "react";
import "./Country.css";
const Country = (props) => {
  const { area, population, name, region, flags } = props.country;
  return (
    <div className="country">
      <img src={flags.svg} alt="oops wrong img" />
      <h3>Country name: {name.common}</h3>
      <p>Population: {population}</p>
      <h5>Area: {area}</h5>
      <p>Region: {region}</p>
    </div>
  );
};

export default Country;
