import React, {Component} from 'react';
import classes from './Orders.module.css';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

class Orders extends Component{
    state = {
        orders: [],
        loading: true
    };

    componentDidMount(){
        axios.get('/orders.json')
        .then(res=> {
            const fetchedOrders = [];
            for(let key in res.data){
                fetchedOrders.push({
                    ...res.data[key],
                    id: key
                });
            }
            this.setState({orders: fetchedOrders});
        })
        .catch(err => {
            console.log('[Orders] componentDidMount -> get /orders error');
            console.log(err);
        })
        .then(()=>{
            this.setState({loading:false});
        });
    };

    componentDidUpdate(){

    };

    render(){
        return (
            <div>
                {this.state.orders.map(order => (
                    <Order 
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}
                        />
                ))}
            </div>
        );
    };

};

export default withErrorHandler(Orders, axios);