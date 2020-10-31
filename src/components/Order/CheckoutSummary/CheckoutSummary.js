import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import styles from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
    const continueHandler = () => {
        if (props.ingredsPrice > 1) {
            props.history.replace("/checkout/contact-info");
        } else {
            return;
        }
    };

    return (
        <div className={styles.CheckoutSummary}>
            <h1>It will taste perfect, won't it?</h1>
            <div style={{ width: "300px", margin: "auto" }}>
                <Burger ingredients={props.ingreds} />
            </div>
            <Button
                type="Danger"
                name="CANCEL"
                action={() => props.history.goBack()}
            />
            <Button type="Success" name="CONTINUE!" action={continueHandler} />
        </div>
    );
};

const mapStateToProps = state => {
    return {
        ingreds: state.ingredients,
        ingredsPrice: state.totalPrice,
    }
}

export default connect(mapStateToProps)(withRouter(checkoutSummary));
