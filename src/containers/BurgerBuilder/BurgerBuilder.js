import React, { Component } from "react";
import Aux from "../../hoc/Auxilary/Auxilary";

import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
import axios from "../../axios-for-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import withErrorHandling from "../../hoc/withErrorHandling/withErrorHandling";

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        ingredientPrices: null,
        totalAmount: 0,
        totalPrice: 1,
        showModal: false,
        loading: false,
        fetchingData: false,
    };

    componentDidMount() {
        this.setState({fetchingData: true});
        axios
            .get(
                "https://steel-sequencer-288911.firebaseio.com/ingredients.json"
            )
            .then((response) => {
                this.setState({ ingredients: response.data });
            });
        axios
            .get("https://steel-sequencer-288911.firebaseio.com/prices.json")
            .then((response) => {
                this.setState({ ingredientPrices: response.data, fetchingData: false});
            });
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        updatedIngredients[type] = updatedCount;

        const oldTotalAmount = this.state.totalAmount;
        const newTotalAmount = oldTotalAmount + 1;

        const priceAddition = this.state.ingredientPrices[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({
            totalPrice: newPrice,
            totalAmount: newTotalAmount,
            ingredients: updatedIngredients,
        });
    };

    showModal = () => {
        this.setState({ showModal: true });
    };

    closeModal = () => {
        this.setState({ showModal: false });
    };

    checkOutHandler = () => {
        this.setState({ loading: true });
        const order = {
            ingredients: this.state.ingredients,
            price: this.state.totalPrice,
            customer: {
                name: "Denys Matsenko",
                email: "idanchik47@gmail.com",
                address: "Some street, 38a",
                phone: "+133455357897",
            },
        };
        axios
            .post("/orders.json", order)
            .then((response) => {
                this.setState({ loading: false, showModal: false });
            })
            .catch((err) => {
                this.setState({ loading: false, showModal: false });
            });
    };

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
        const newPrice = oldPrice - this.state.ingredientPrices[type];

        this.setState({
            totalPrice: newPrice,
            totalAmount: newTotalAmount,
            ingredients: updatedIngredients,
        });
    };

    render() {
        const disabledInfo = { ...this.state.ingredients };
        let fetched = null;

        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
        }

        let orderSummary = (
            <OrderSummary
                ingredients={this.state.ingredients}
                totalPrice={this.state.totalPrice}
                cancel={this.closeModal}
                checkOut={this.checkOutHandler}
            />
        );

        if (this.state.loading) {
            orderSummary = <Spinner />;
        }

        if(this.state.fetchingData) {
            fetched = (
                <Aux>
                    <Spinner />
                </Aux>
            );
        } else {
            fetched = <Burger ingredients={this.state.ingredients} />;
        }

        return (
            <Aux>
                <Modal show={this.state.showModal} closeModal={this.closeModal}>
                    {orderSummary}
                </Modal>
                {fetched}
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

export default withErrorHandling(BurgerBuilder, axios);
