import React from "react";

const Results = props => {
 const date = props.date && props.date.slice(0, 10);
 return (
   <div className="results">
     <a href={props.url} target="_blank"><h6 id={props._id}>{props.title}</h6></a>
     <h6 id={props._id}>{props.author}</h6>
     <p>{date}</p>
     <span className="#">
       <button className="saveBtn waves-effect" onClick={(event) => props.handleSaveButton(event, props._id)}>Save</button>
     </span>
   </div>
 )
};

export default Results;