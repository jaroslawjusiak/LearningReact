import React, {Component} from 'react';
import classes from './ContactData.module.css';
import Button from '../../../components/UI/Button/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Input from '../../../components/UI/Input/Input';

class ContactData extends Component{
    state = {
        name: '',
        email: '',
        address: {
            street: '',
            postalCode: ''
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
            customer: {
                name: 'Keraj Kaisuj',
                address: {
                    street: 'Niepodległości 8',
                    postCode: '20-123',
                    country: 'Poland'
                },
                email: 'keraj.kaisuj@gmail.com'
            },
            deliveryMethod: 'fastest'
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
        let form = (
            <form>
                   <Input inputtype="input" type="text" name="name" placeholder="Your Name" />
                   <Input inputtype="input" type="email" name="email" placeholder="Your Email" />
                   <Input inputtype="input" type="text" name="street" placeholder="Street" />
                   <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
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