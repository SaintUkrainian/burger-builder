import React from "react";

import Aux from "../../../hoc/Auxilary/Auxilary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary = props.ingredients;
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
            <h3>Total price: ${props.totalPrice.toFixed(2)}</h3>
            <p>Checking out?</p>
            <Button action={props.cancel} name="Cancel" type="Danger" />
            <Button action={props.checkOut} name="Checkout!" type="Success" />
        </Aux>
    );
};

export default orderSummary;
