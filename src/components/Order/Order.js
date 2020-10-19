import React from "react";
import styles from "./Order.module.css";

const order = (props) => {
    const ingredsTransformed = Object.keys(props.ingredients)
        .map((key) => key.toUpperCase() + " " + props.ingredients[key] + "x")
        .join(", ");

    return (
        <div className={styles.Order}>
            <p>Ingredients: {ingredsTransformed}</p>
            <p>
                Price: <strong>${props.price}</strong>
            </p>
        </div>
    );
};

export default order;
