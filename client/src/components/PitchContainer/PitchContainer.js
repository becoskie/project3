/* Nav Bar being rendered on the page here*/
import React from "react";
import Dashboard from '../../pages/dashboard';
import "./PitchContainer.css";

const PitchContainer = ({title, description, upVote, downVote, index, handleUpVote}) =>
    <div>
        <li className='list-group-item pitch-item'>
            <span style={{ marginRight: '10px' }}>
                {upVote} {downVote}
                <button className='up-vote btn btn-success' data-index={index} onClick={handleUpVote}><i className='fa fa-arrow-up'></i></button>
                <button className='down-vote btn btn-primary' data-index={index}><i className='fa fa-arrow-down'></i></button>
                {title}
            </span>
            <button className='btn btn-info comments'>See Description</button>
            <div className='comment-container' style={{ display: 'none' }}></div>
            <div className='col-sm-12 col-sm-offset-2'>
                <br></br>
                <h6>Description</h6>
                <hr></hr>
                <div id='comments-area'>{description}</div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-sm-offset-2'>
                    <br></br>
                    
                    
                    <br></br>
                    
                </div>
                
            </div>

        </li>
    </div>
;


export default PitchContainer;  