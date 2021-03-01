import React from "react";
import Button from "react-bootstrap/Button";
import "./Player.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

const Player = (props) => {
  console.log(props);
  const { name, salary, rating, club, country, img } = props.player;
  return (
    <div className="single-player">
      <div className="info">
        <h3>Name: {name}</h3>
        <p>Rating: {rating} </p>
        <p>Salary: {salary}</p>
        <p>Club: {club}</p>
        <p>Country: {country}</p>
        <Button
          className="btn-warning"
          onClick={() => props.handleAddPlayers(props.player)}
        >
          Add Player <FontAwesomeIcon icon={faUserPlus} />
        </Button>
      </div>
      <div className="image">
        <img className="pb-2 size" src={img} alt="this is an image" />
      </div>
    </div>
  );
};

export default Player;
