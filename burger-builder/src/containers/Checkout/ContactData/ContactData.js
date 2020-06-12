import React, {Component} from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{
    state = {
        orderForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Name'
                },
                value: ''
            },
            street: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Street'
                },
                value: ''
            },
            postCode: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Post Code'
                },
                value: ''
            },
            country: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Country'
                },
                value: ''
            },
            email: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Your Email'
                },
                value: ''
            },
            deliveryMethod: {
                elementType: 'select',
                elementConfig: {
                    options: [
                        {value: 'fastest', displayValue: 'Fastest'},
                        {value: 'cheapest', displayValue: 'Cheapest'},
                    ]
                },
                value: ''
            },
        },
        loading: false
    };

    componentDidMount(){

    };

    componentDidUpdate(){

    };

    orderHandler = (event) => {
        event.preventDefault(); //prevent reloading page which is default action on submitting form
        console.log(this.props.ingredients);

        this.setState({loading:true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            
        };
        
        axios.post('/orders.json', order)
        .then(response => {
            console.log(response);
            this.setState({loading:false});
            this.props.history.push('/');
        })
        .catch(error => {
            console.log(error);
            this.setState({loading:false});
        });
    }

    render(){
        const formElementsArray = [];
        for (let key in this.state.orderForm){
            formElementsArray.push({
                id: key,
                config: this.state.orderForm[key]
            });
        }
        console.log("formElementsArray");
        console.log(formElementsArray);
        let form = (
            <form>
                   {formElementsArray.map(formElement =>(
                       <Input key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        />
                   ))}
                   <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
               </form>
        );
        if(this.state.loading){
            form = <Spinner />;
        }
       return (
           <div className={classes.ContactData}>
               <h4>Enter your Contact Data</h4>
               {form}
           </div>
       );
    };

};

export default ContactData;