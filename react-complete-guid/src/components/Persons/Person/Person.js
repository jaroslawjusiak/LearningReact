import React, {Component, Fragment} from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Auxiliary';

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        return (
            <Fragment>
                <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </Fragment> 
            // <Aux>
            // <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
            // <p>{this.props.children}</p>
            // <input type="text" onChange={this.props.changed} value={this.props.name} />
            //  </Aux>      
            // <React.Fragment>
            // <p onClick={this.props.click}>I'm {this.props.name} and I'm {this.props.age} years old!</p>
            // <p>{this.props.children}</p>
            // <input type="text" onChange={this.props.changed} value={this.props.name} />
            // </React.Fragment>      
        )
    }
    
}
//Aux element is not a HTML element and will not be added as such into DOM
//Built in Aux component is called React.Fragment
//Instead of using default notation React.Fragment, we can import Fragment and use it instead
export default Person;