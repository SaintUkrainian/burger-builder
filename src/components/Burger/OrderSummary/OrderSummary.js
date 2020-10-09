import React from "react";
import { Component } from "react";

import Aux from "../../../hoc/Auxilary/Auxilary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

    render () {
        const ingredientSummary = this.props.ingredients;
        const listItems = Object.keys(ingredientSummary).map((key) => (
            <li key={key}>
                <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
                {ingredientSummary[key]}x
            </li>
        ));
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Delicious Burger with following ingredients:</p>
                <ul>{listItems}</ul>
                <h3>Total price: ${this.props.totalPrice.toFixed(2)}</h3>
                <p>Checking out?</p>
                <Button action={this.props.cancel} name="Cancel" type="Danger" />
                <Button action={this.props.checkOut} name="Checkout!" type="Success" />
            </Aux>
        );
    }
    
};

export default OrderSummary;
