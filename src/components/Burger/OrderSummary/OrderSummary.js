import React from "react";

import Aux from "../../../hoc/Auxilary/Auxilary";

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
            <p>Checking out?</p>
        </Aux>
    );
};

export default orderSummary;
