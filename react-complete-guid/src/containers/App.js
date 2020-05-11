import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {

  constructor(props){
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 'gbsdf', name: 'Max', age: 28 },
      { id: 'SGvbr', name: 'Manu', age: 29 },
      { id: 'gsdfggr3', name: 'Stephanie', age: 26 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount');
  }

  componentDidUpdate(){
    console.log('[App.js] componentDidUpdate');
  }
  
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    //spread operator gets all properties of person original object and sets it in new object
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    // slice method without arguments copies the whole array
    //const persons = this.state.persons.slice();
    
    // ES6 alternative approach - using spread operator (...) which creates lists of elements of original array.
    // Having such list we can use it to create new array, by passing into list of elements
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }


  togglePersonsHandler = () =>{
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;
   
    if(this.state.showPersons){
      persons = <Persons 
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}/> ;   
    }
    
    return (
      <div className={classes.App}>
        <button onClick={() => {this.setState({showCockpit: false})}}>Remove Cockpit</button>
        {this.state.showCockpit ? <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          clicked={this.togglePersonsHandler}/> :  null}
        {persons}
      </div>      
    );    
  }
}

export default App;