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

class BurgerBuilder extends Component {
    state = {
        showModal: false,
        loading: false,
        fetchingData: false,
    };

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

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        if (this.state.fetchingData) {
            fetched = (
                <Aux>
                    <Spinner />
                </Aux>
            );
        } else {
            fetched = <Burger ingredients={this.props.ingredients} />;
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
        ingredients: state.ingredients,
        totalPrice: state.totalPrice,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addIngredientHandler: (ingredientType) =>
            dispatch({ type: "add", ingredient: ingredientType }),
        removeIngredientHandler: (ingredientType) =>
            dispatch({ type: "remove", ingredient: ingredientType }),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withErrorHandling(BurgerBuilder, axios));
