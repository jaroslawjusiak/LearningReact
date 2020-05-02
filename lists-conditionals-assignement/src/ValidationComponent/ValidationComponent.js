import React from 'react';

const validationComponent = (props) =>{
    
    let warning = null;

    if(props.length <5){
        warning = (
            <div className="ValidationWarning">
                <p>Text is too short!</p>
            </div>
        )
    }

    if(props.length >20){
        warning = (
            <div className="ValidationWarning">
                <p>Text is too long!</p>
            </div>
        )
    }
    
    return (
        <div className="Validation">
            {warning}
        </div>
    )
}

export default validationComponent;
