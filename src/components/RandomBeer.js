import { useState, useEffect } from "react";
import axios from "axios";

function RandomBeer() {
  const [beer, setBeer] = useState(null);

  useEffect(() => {
    axios
      .get(process.env.REACT_APP_APIURL + `/random`)
      .then((response) => {
        setBeer(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    return beer ? (
      <div>
        <h1>{beer.name}</h1>
        <img src={beer.image_url} alt={beer.name} />
        <p>{beer.tagline}</p>
        <p>First brewed: {beer.first_brewed}</p>
        <p>Attenuation level: {beer.attenuation_level}</p>
        <p>{beer.description}</p>
        <p>Contributed by: {beer.contributed_by}</p>
      </div>)
    : ( <p> Loading... </p>)

  }

export default RandomBeer;