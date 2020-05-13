import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';
import withClass from '../../../hoc/withClass';
import AuthContext from '../../../context/auth-context';

class Person extends Component {
    
    constructor(props){
        super(props);
        this.inputElementRef = React.createRef();
    }

    componentDidMount(){
        this.inputElementRef.current.focus();
    }
    
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Aux>
            <AuthContext.Consumer>
                {(context) => context.authenticated ? <p>Authenticated</p> : <p>Please log in!</p>}
            </AuthContext.Consumer>
            
            <p 
                onClick={this.props.click}>
                    I'm {this.props.name} and I'm {this.props.age} years old!
            </p>
            <p>{this.props.children}</p>
            <input 
                type="text" 
                onChange={this.props.changed} 
                value={this.props.name} 
                //ref={(inputEl) => {this.inputElementRef = inputEl}}
                ref={this.inputElementRef}
                />
             </Aux>                    
        )
    }
    
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
};

export default withClass(Person, classes.Person);