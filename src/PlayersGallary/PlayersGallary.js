import React, { useState } from "react";
import Player from "../Player/Player";
import PlayersData from "../PlayersData/PlayersData.json";
import Team from "../Team/Team";
import "./PlayersGallary.css";

const PlayersGallary = () => {
  const first30 = PlayersData.slice(0, 30);
  const [players, setPlayers] = useState(first30);

  const [team, setTeam] = useState([]);
  console.log(players.length);

  const handleAddPlayers = (player) => {
    // console.log("Player added.", player);
    let newTeam = [...team, player];
    let unique = [...new Set(newTeam)];
    setTeam(unique);
  };

  return (
    <div>
      <h2>This is Players Gallary</h2>
      <div className="players-gallary">
        <div className="player-container">
          {players.map((player) => (
            <Player
              key={Math.random()}
              handleAddPlayers={handleAddPlayers}
              player={player}
            ></Player>
          ))}
        </div>
        <div className="team">
          <Team key={Math.random()} team={team}></Team>
        </div>
      </div>
    </div>
  );
};

export default PlayersGallary;
