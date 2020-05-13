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
            <WrappedComponent {...props}/>
        </div>
    );
};

//{...props} gets all props from whatever we want wrap and sets them in WrappedComponent
//In case of this app it gets props of Person component and set them in WrappedComponent
//Using lower case in file name suggest that this is not a component, but a function that is retuning a component
//This is done in Persons.js where all props of Person are set and passed to Person component where withclass function is called.

export default withClass;