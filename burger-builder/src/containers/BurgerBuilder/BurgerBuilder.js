import React, { Component } from 'react';
import { connect } from 'react-redux';
import Aux from '../../hoc/Auxiliary/Auxiliary';
import Burger from './../../components/Burger/Burger';
import BuildControls from './../../components/Burger/BuildControls/BuildControls';
import Modal from './../../components/UI/Modal/Modal';
import OrderSummary from './../../components/Burger/OrderSummary/OrderSummary';
import axios from '../../axios-orders';
import Spinner from './../../components/UI/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../../store/actions/index';

class BurgerBuilder extends Component {
	state = {
		purchasing: false
	};

	componentDidMount() {
		console.log('[BurgerBuild] componentDidMount');
		this.props.onInitIngredients();
	}

	updatePurchaseState(ingredients) {
		const sum = Object.keys(ingredients)
			.map(igkey => {
				return ingredients[igkey];
			})
			.reduce((sum, el) => {
				return sum + el;
			}, 0);
		return sum > 0;
	}

	purchaseHandler = () => {
		this.setState({ purchasing: true });
	};

	purchaseCancelHandler = () => {
		this.setState({ purchasing: false });
	};

	purchaseContinueHandler = () => {
		console.log('[BurgerBuilder] - purchaseContinueHandler');
		this.props.onPurchaseInit();
		this.props.history.push('/checkout');
	};

	render() {
		console.log('ings', this.props.ings);
		const disableInfo = {
			...this.props.ings
		};
		for (let key in disableInfo) {
			disableInfo[key] = disableInfo[key] <= 0;
		}

		let orderSummary = null;
		let burger = this.props.error ? <p>Ingredients can't be loaded!</p> : <Spinner />;

		console.log('[BurgerBuilder]: render', this.props.ings);

		if (this.props.ings) {
			orderSummary = (
				<OrderSummary
					purchaseCancelled={this.purchaseCancelHandler}
					purchaseContinued={this.purchaseContinueHandler}
					ingredients={this.props.ings}
					price={this.props.price.toFixed(2)}
				/>
			);

			burger = (
				<Aux>
					<Burger ingredients={this.props.ings} />
					<BuildControls
						// ingredientAdded={(name) => this.props.onIngredientAdded(name)}
						// ingredientRemoved={(name) => this.props.onIngredientRemoved(name)}
						ingredientAdded={this.props.onIngredientAdded}
						ingredientRemoved={this.props.onIngredientRemoved}
						disabled={disableInfo}
						purchasable={this.updatePurchaseState(this.props.ings)}
						ordered={this.purchaseHandler}
						price={this.props.price}
					/>
				</Aux>
			);
		}

		return (
			<Aux>
				<Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
					{orderSummary}
				</Modal>
				{burger}
			</Aux>
		);
	}
}

const mapStateToProps = state => {
	return {
		ings: state.burgerBuilder.ingredients,
		price: state.burgerBuilder.totalPrice,
		error: state.burgerBuilder.error
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onIngredientAdded: name => dispatch(actions.addIngredient(name)),
		onIngredientRemoved: name => dispatch(actions.removeIngredient(name)),
		onInitIngredients: () => dispatch(actions.initIngredientsAsync()),
		onPurchaseInit: () => dispatch(actions.purchaseInit())
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(BurgerBuilder, axios));
