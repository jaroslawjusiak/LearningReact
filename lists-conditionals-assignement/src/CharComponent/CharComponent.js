import React from 'react';


const charComponent = (props) =>{
    return(
    <div className="CharComponent">
        <p onClick={props.click}>{props.charValue}</p>
    </div>
    )
}

export default charComponent;