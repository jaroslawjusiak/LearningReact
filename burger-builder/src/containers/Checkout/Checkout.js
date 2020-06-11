import React, {Component} from 'react';
import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import {Route} from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';

class Checkout extends Component{
   
     constructor(props) {
          super(props);
          
          const query = new URLSearchParams(props.location.search);
          const ingredients = {};
          let price = 0;
          for(let param of query.entries()){
               if(param[0] === 'price'){
               price = param[1];
               continue;
               }
               ingredients[param[0]] = +param[1];
          }
          this.state = {ingredients : ingredients, totalPrice: price};
     }
   
     state = {
        ingredients : null,
        totalPrice: 0
     };

    componentDidMount(){
          console.log("[Checkout] componentDidMount");                    
          console.log(this.state);
   };

   componentDidUpdate(){

   };

   checkoutCancelledHandler = () => {
        this.props.history.goBack();
   }

   checkoutContinuedHandler = () => {
        this.props.history.replace('/checkout/contact-data');
   }

   render(){
      return (
         <div>
             <CheckoutSummary 
             checkoutCancelled={this.checkoutCancelledHandler}
             checkoutContinued={this.checkoutContinuedHandler}
             ingredients={this.state.ingredients}/>
             <Route 
               path={this.props.match.path + '/contact-data'} 
               render={(props) => (
                    <ContactData 
                         ingredients={this.state.ingredients} 
                         price={this.state.totalPrice}
                         {...props}/>
                    )
               }
               />
         </div>
      );
   };

};

export default Checkout;