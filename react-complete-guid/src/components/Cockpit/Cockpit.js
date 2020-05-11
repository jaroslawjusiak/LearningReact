import React, {useEffect} from 'react';
import classes from './Cockpit.css';

const cockpit = (props) => {
    
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    const timer = setTimeout(()=>{
      console.log('Saved data to cloud!');
    },1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work in useEffect');
    };
  }, []);

  useEffect(() =>{
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] 2nd cleanup work in useEffect');
    };
  });

  //[props.persons] -> gdy zmieni sie zawartosc persons, to metoda ta odpali sie
  //[] -> dla puste tablicy uruchomi sie tylko 1 raz, gdy jest inicjowany komponent
  
  const assignedClasses = [];
    let btnClass = '';
    
    if(props.showPersons){
      btnClass = classes.Red;
    }
    
    if(props.persons.length <=2){
      assignedClasses.push(classes.red); //classes = ['red']
    }

    if(props.persons.length <=1){
      assignedClasses.push(classes.bold); //classes = ['red', 'bold']
    }

    
    
    return (
        <div className={classes.Cockpit}>
            <h1>{props.title}</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button className={btnClass} onClick={props.clicked}>
                Switch Name
            </button>
        </div>
    );
}

export default cockpit;