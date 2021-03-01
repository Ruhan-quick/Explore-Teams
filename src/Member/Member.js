import React from "react";
import "./Member.css";
const Member = (props) => {
  const { name, salary } = props.team;
  return (
    <div className="member">
      <p>Name:{name} </p>
      <p>
        <small>Salary: {salary}</small>
      </p>
    </div>
  );
};

export default Member;
