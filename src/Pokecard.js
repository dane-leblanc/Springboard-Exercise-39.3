import React from "react";
import "./Pokecard.css";

const POKE_API =
  "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

function Pokecard(props) {
  let imgSrc = `${POKE_API}${props.id}.png`;

  return (
    <div className="Pokecard">
      <div className="Pokecard-name">{props.name}</div>
      <img src={imgSrc} alt="pokemon" />
      <div>Type: {props.type}</div>
      <div>EXP: {props.experience}</div>
    </div>
  );
}

export default Pokecard;
