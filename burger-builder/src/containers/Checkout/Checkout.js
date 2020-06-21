import React, { Component } from 'react';
import classes from './Checkout.module.css';
import CheckoutSummary from '../../components/Order/CheckoutSummary/CheckoutSummary';
import { Route, Redirect } from 'react-router-dom';
import ContactData from '../Checkout/ContactData/ContactData';
import { connect } from 'react-redux';

class Checkout extends Component {
	componentDidMount() {
		console.log('[Checkout] componentDidMount');
		console.log(this.props);
	}

	componentDidUpdate() { }

	checkoutCancelledHandler = () => {
		this.props.history.goBack();
	};

	checkoutContinuedHandler = () => {
		this.props.history.replace('/checkout/contact-data');
	};

	render() {
		let summary = <Redirect to="/" />;
		if (this.props.ings) {
			summary = (
				<div>
					<CheckoutSummary
						checkoutCancelled={this.checkoutCancelledHandler}
						checkoutContinued={this.checkoutContinuedHandler}
						ingredients={this.props.ings}
					/>
					<Route path={this.props.match.path + '/contact-data'} component={ContactData} />
				</div>
			);
		}

		return summary;
	}
}

const mapStateToProps = state => {
	return {
		ings: state.ingredients
	};
};

export default connect(mapStateToProps)(Checkout);
