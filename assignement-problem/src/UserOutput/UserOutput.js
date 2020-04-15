import React from 'react';

const userOutput = (props) => {
    const style = {
        fontWeight: "bold"
    }
    
    return (
        <div className="UserOutput">
            <p>Username: <span style={style}>{props.username}</span></p>
            <p></p>
        </div>
    )
}

export default userOutput;