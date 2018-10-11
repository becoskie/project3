import React from "react";
import "./Card.css";

const Card = props => (
  <div className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
    <div className="content">
      <ul>
        <li>
          <strong class="projectTitle">Title:</strong> {props.name}
        </li>
        <li>
          <strong class="projectDes">Description:</strong> {props.description}
        </li>
      </ul>
    </div>
  </div>
);

export default Card;
