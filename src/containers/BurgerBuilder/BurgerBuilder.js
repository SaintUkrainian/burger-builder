import React, { Component } from "react";
import Aux from "../../hoc/Auxilary/Auxilary";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-for-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandling from "../../hoc/withErrorHandling/withErrorHandling";
import { connect } from "react-redux";

import * as actions from "../../store/actions/burgerBuilder";

class BurgerBuilder extends Component {
    state = {
        showModal: false,
    };

    componentDidMount() {
        this.props.initIngredients();
    }

    showModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    checkOutHandler = () => {
        this.props.history.push({
            pathname: "/checkout",
        });
    };

    render() {
        const disabledInfo = { ...this.props.ingredients };
        let fetched = null;

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = (
            <OrderSummary
                ingredients={this.props.ingredients}
                totalPrice={this.props.totalPrice}
                cancel={this.closeModal}
                checkOut={this.checkOutHandler}
            />
        );

        if(this.props.ingredients){
            fetched = <Burger ingredients={this.props.ingredients} />;
        } else if(this.props.error){
            fetched = <h1>An Error occured.</h1>;
        } else if(this.props.ingredients === null) {
            fetched = <Spinner />;
        }

        return (
            <Aux>
                <Modal show={this.state.showModal} closeModal={this.closeModal}>
                    {orderSummary}
                </Modal>
                {fetched}
                <BuildControls
                    addIngredient={this.props.addIngredientHandler}
                    removeIngredient={this.props.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.props.totalPrice}
                    showModal={this.showModal}
                />
            </Aux>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ingredients: state.burgerBuilder.ingredients,
        totalPrice: state.burgerBuilder.totalPrice,
        error: state.burgerBuilder.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredientHandler: (ingredientType) =>
            dispatch(actions.addIngredient(ingredientType)),
        removeIngredientHandler: (ingredientType) =>
            dispatch(actions.removeIngredient(ingredientType)),
        initIngredients:() => dispatch(actions.initIngredients()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandling(BurgerBuilder, axios));
