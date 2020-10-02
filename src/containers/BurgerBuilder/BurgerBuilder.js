import React, { Component } from "react";
import Aux from "../../hoc/Auxilary/Auxilary";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import Backdrop from "../../components/UI/Backdrop/Backdrop";



const INGREDIENT_PRICES = {
    salad: 1,
    bacon: 4.5,
    meat: 5,
    cheese: 2,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalAmount: 0,
        totalPrice: 1,
        showModal: false,
    };

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;

        const oldTotalAmount = this.state.totalAmount;
        const newTotalAmount = oldTotalAmount + 1;

        const priceAddition = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            totalAmount: newTotalAmount,
            ingredients: updatedIngredients,
        });
    };

    showModal = () => {
        this.setState({showModal: true});
    }

    closeModal = () => {
        this.setState({showModal: false});
    }

    removeIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const newCount = oldCount - 1;

        const updatedIngredients = { ...this.state.ingredients };
        updatedIngredients[type] = newCount;

        const oldTotalAmount = this.state.totalAmount;
        const newTotalAmount = oldTotalAmount - 1;

        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - INGREDIENT_PRICES[type];

        this.setState({
            totalPrice: newPrice,
            totalAmount: newTotalAmount,
            ingredients: updatedIngredients,
        });
    };

    render() {
        const disabledInfo = {...this.state.ingredients};

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        return (
            <Aux>
                <Backdrop show={this.state.showModal} closeModal={this.closeModal}/>
                <Modal show={this.state.showModal} closeModal={this.closeModal}>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    addIngredient={this.addIngredientHandler}
                    removeIngredient={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalPrice}
                    totalAmount={this.state.totalAmount}
                    showModal={this.showModal}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
