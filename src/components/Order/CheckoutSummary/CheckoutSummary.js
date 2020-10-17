import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import { withRouter } from "react-router-dom";

import styles from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
    console.log(props);
    return (
        <div className={styles.CheckoutSummary}>
            <h1>It will taste perfect, won't it?</h1>
            <div style={{ width: "300px", margin: "auto" }}>
                <Burger ingredients={props.ingredients} />
            </div>
            <Button
                type="Danger"
                name="CANCEL"
                action={() => props.history.goBack()}
            />
            <Button
                type="Success"
                name="CONTINUE!"
                action={() => {
                    props.history.replace("/checkout/contact-info");
                }}
            />
        </div>
    );
};

export default withRouter(checkoutSummary);
