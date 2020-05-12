import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  
  // static getDerivedStateFromProps(props, state){
  //   console.log('[Persons.js] getDerivedStateFromProps');
  //   return state;
  // }

  //OBSOLATE
  // componentWillReceiveProps(props){
  //   console.log('[Persons.js] componentWillReceiveProps', props);
  // }


  //IF WE WANT TO CHECK ALL PROPS WE CAN NOT USE SHOULD_COMPONENT_UPDATE
  //INSTEAD WE CAN EXTEND PureComponent CLASS WHICH AUTO IMPLEMENTS IT FOR US

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if(
  //     nextProps.persons !== this.props.persons ||
  //     nextProps.clicked !== this.props.clicked ||
  //     nextProps.changed !== this.props.changed      
  //     ){
  //     return true; //return true if react should continue updating
  //   }
  //   else{
  //     return false;
  //   }
  // }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!'};
  }

  componentDidUpdate(prevProps, prevState, snapshot){
    console.log('[Persons.js] componentDidUpdate', snapshot);
  }

  componentWillUnmount(){
    console.log('[Persons.js] componentWillUnmount');
  }

  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {  
          return <Person
          click={() => this.props.clicked(index)}
          name={person.name}
          age={person.age} 
          key={person.id} 
          changed={(event) => this.props.changed(event, person.id)}/>
        })
  };
}

export default Persons;