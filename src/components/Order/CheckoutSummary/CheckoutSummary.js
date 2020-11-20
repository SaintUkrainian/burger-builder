import React from "react";

import Burger from "../../Burger/Burger";
import Button from "../../UI/Button/Button";

import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

import * as actions from "../../../store/actions/order";

import styles from "./CheckoutSummary.module.css";

const checkoutSummary = (props) => {
    const continueHandler = () => {
        props.initPurchasing();
        props.history.replace("/checkout/contact-info");
    };
    return (
        <div className={styles.CheckoutSummary}>
            {props.token ? null : <Redirect to="/burger" />}
            <h1>It will taste perfect, won't it?</h1>
            <div style={{ width: "300px", margin: "auto" }}>
                <Burger ingredients={props.ingreds} />
            </div>
            <Button
                type="Danger"
                name="CANCEL"
                action={() => props.history.push("/burger")}
            />
            <Button type="Success" name="CONTINUE!" action={continueHandler} />
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        ingreds: state.burgerBuilder.ingredients,
        ingredsPrice: state.burgerBuilder.totalPrice,
        token: state.auth.token,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initPurchasing: () => dispatch(actions.purchaseInit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(checkoutSummary));
