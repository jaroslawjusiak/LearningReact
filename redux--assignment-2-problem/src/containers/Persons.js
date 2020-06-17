import React, { Component } from 'react';
import {connect} from 'react-redux';
import Person from '../components/Person/Person';
import AddPerson from '../components/AddPerson/AddPerson';
import * as actions from '../store/actions';

class Persons extends Component {
    
    render () {
        console.log('Persons: ', this.props.ps);
        return (
            <div>
                <AddPerson personAdded={this.props.onAddPerson} />
                {this.props.ps.map(person => {
                    console.log("Person: ", person);
                    return (
                        <Person 
                            key={person.id}
                            name={person.name} 
                            age={person.age} 
                            clicked={() => this.props.onDeletePerson(person.id)}/>
                        );
                    })
                }
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ps: state.persons
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onAddPerson: () => dispatch({type: actions.ADD_PERSON}),
        onDeletePerson: (id) => dispatch({type: actions.DELETE_PERSON, id:id})
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Persons);