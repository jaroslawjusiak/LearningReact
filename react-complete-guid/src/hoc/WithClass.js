import React from 'react';

// const withClass = props => (
//     <div className={props.classes}>
//         {props.children}
//     </div>
// );


//WrappedComponent - a component we want to wrap
//List of arguments which add some extra content to component like CSS styling

const withClass = (WrappedComponent, className) => {
    return props  => (
        <div className={className}>
            <WrappedComponent/>
        </div>
    );
};

//Using lower case in file name suggest that this is not a component, but a function that is retuning a component

export default withClass;