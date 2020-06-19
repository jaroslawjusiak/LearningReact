import * as actions from './actions';

const initialState = {
    persons: []
};

const reducer = (state = initialState, action) => {
    switch(action.type){
        case actions.ADD_PERSON:
            const newPerson = {
                id: Math.random(), // not really unique but good enough here!
                name: action.personData.name,
                age: action.personData.age
            }
            return { persons: state.persons.concat(newPerson)};
        
        case actions.DELETE_PERSON:
            const updatedPersons = state.persons.filter(p=> p.id !== action.id);
            return {persons: updatedPersons};
             
            
        default:
            return state;
    }
}


export default reducer;