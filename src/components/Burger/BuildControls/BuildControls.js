import React from "react";

import styles from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";
import { Link } from "react-router-dom";

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" },
];

const buildControls = (props) => {
    return (
        <div className={styles.BuildControls}>
            <p>
                Total price: <strong>${props.price.toFixed(2)}</strong>
            </p>
            {controls.map((item) => (
                <BuildControl
                    key={item.label}
                    label={item.label}
                    type={item.type}
                    added={props.addIngredient}
                    removed={props.removeIngredient}
                    disabled={props.disabled[item.type]}
                />
            ))}
            {props.token ? (
                <button
                    onClick={props.showModal}
                    className={styles.OrderButton}
                    disabled={!(props.price >= 2)}
                >
                    ORDER NOW!
                </button>
            ) : (
                <Link
                    className={styles.OrderButton}
                    to="/auth"
                >
                    Sign Up
                </Link>
            )}
        </div>
    );
};

export default buildControls;
