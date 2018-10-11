import React from "react";

const Saved = props => {
 const date = props.date && props.date.slice(0, 10);
 return (
   <div className="saved">
     <a href={props.url} target="_blank"><h6 id={props._id}>{props.title}</h6></a>
     <h6 id={props._id}></h6>
     <p>{date}</p>
     <span className="#">
       <button className="saveBtn waves-effect" onClick={(event) => props.handleDeleteButton(event, props._id)}>Delete</button>
     </span>
   </div>
 )
};

export default Saved;