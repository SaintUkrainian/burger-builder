import React from "react";
import { Component } from "react";

import Aux from "../../../hoc/Auxilary/Auxilary";
import Button from "../../UI/Button/Button";

class OrderSummary extends Component {

    render () {
        const ingredientSummary = this.props.ingredients;
        let listItems;
        if(!ingredientSummary) {
            listItems = (<p>Sorry, couldn't get the data from the Web :(</p>);
        } else {
            listItems = Object.keys(ingredientSummary).map((key) => (
                <li key={key}>
                    <span style={{ textTransform: "capitalize" }}>{key}</span>:{" "}
                    {ingredientSummary[key]}x
                </li>
            ));
        }
        
        return (
            <Aux>
                <h3>Your Order</h3>
                <p>Delicious Burger with following ingredients:</p>
                <ul>{listItems}</ul>
                <h3>Total price: ${this.props.totalPrice.toFixed(2)}</h3>
                <p>Checking out?</p>
                <Button action={this.props.cancel} name="Cancel" type="Danger" />
                <Button action={this.props.checkOut} name="Checkout!" type="Success" />
                {/* <Link to={"/checkout/" + this.props.ingredients.meat + "&" + this.props.ingredients.bacon + "&" + this.props.ingredients.cheese + "&" + this.props.ingredients.salad + "&" + this.props.totalPrice.toFixed(2)}>Checkout</Link> */}
            </Aux>
        );
    }
    
};

export default OrderSummary;
