import React, { Component } from 'react';
import classes from './Orders.module.css';
import Order from '../../components/Order/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';
import { connect } from 'react-redux';
import Spinner from '../../components/UI/Spinner/Spinner';

class Orders extends Component {

    componentDidMount() {
        console.log('[Orders]: componentDidMount - token', this.props.token)
        this.props.onFetchOrders(this.props.token);
        console.log('[Orders] - componentDidMount: props', this.props);
    };

    componentDidUpdate() {

    };

    render() {
        console.log('[Orders] - render: props', this.props);
        let orders = <Spinner />;
        if (!this.props.loading) {
            orders =
                this.props.orders.map(order => (
                    <Order
                        key={order.id}
                        ingredients={order.ingredients}
                        price={+order.price}
                    />
                ));
        }
        return (
            <div>
                {orders}
            </div>
        );
    };

};

const mapStateToProps = state => {
    return {
        orders: state.order.orders,
        loading: state.order.loading,
        token: state.auth.token
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onFetchOrders: (token) => dispatch(actions.fetchOrdersAsync(token))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(Orders, axios));