import React from "react";
import Member from "../Member/Member";

const Team = (props) => {
  const team = props.team;
  console.log(props.team.length);
  const totalSalary = team.reduce(
    (totalSalary, tm) => totalSalary + tm.salary,
    0
  );

  return (
    <div>
      <h3>This is the team.</h3>
      <h5>Number of players: {props.team.length}</h5>
      {team.map((team) => (
        <Member key={Math.random()} team={team}></Member>
      ))}

      <p>Total Salary Cost: {totalSalary}</p>
    </div>
  );
};

export default Team;
