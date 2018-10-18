import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} onClick={() => props.handleJoinButton(props.name)}/>
    </div>
    <div className="content">
      <ul>
        <li>
          <strong id="projectTitle">Title:</strong> {props.name}
        </li>
        <li>
          <strong id="projectDes">Description:</strong> {props.description}
        </li>
      </ul>
    </div>
  </div>
);

export default Card;
