/* Nav Bar being rendered on the page here*/
import React from "react";
 const PitchContainer = () =>
    <div>
        <li className='list-group-item pitch-item'>
            <span style={{ marginRight: '10px' }}>
                <button className='up-vote btn btn-primary'><i className='fas fa-arrow-up'></i></button>
                <button className='down-vote btn btn-danger'><i className='fas fa-arrow-down'></i></button>
            </span>
            <button className='btn btn-primary comments'>comments</button>
            <div className='comment-container' style={{ display: 'none' }}></div>
            <div className='col-sm-12 col-sm-offset-2'>
                <br></br>
                <h6>Comments</h6>
                <hr></hr>
                <div id='comments-area'></div>
            </div>
            <div className='row'>
                <div className='col-sm-12 col-sm-offset-2'>
                    <br></br>
                    <p className='cool-font'>Comments</p>
                    <textarea class='form-control comment-box' rows='3' placeholder='Enter comments Here!'></textarea>
                    <br></br>
                    <button id='comments-submit' className='submit btn btn-primary float-left'>Submit!</button>
                </div>
            </div>
        </li>
    </div>
;
 export default PitchContainer;   
