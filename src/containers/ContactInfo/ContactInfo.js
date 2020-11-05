import React, { Component } from "react";

import styles from "./ContactInfo.module.css";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-for-orders";
import Input from "../../components/UI/Input/Input";
import { withRouter, Redirect } from "react-router";
import { connect } from "react-redux";
import withError from "../../hoc/withErrorHandling/withErrorHandling";
import * as actions from "../../store/actions/order";


class ContactInfo extends Component {

    constructor(props) {
        super(props);
        this.props.initPurchasing();
    }

    state = {
        customer: {
            name: {
                value: "",
                valid: false,
                regex: /\D+/,
            },
            email: {
                value: "",
                valid: false,
                regex: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
            },
            address: {
                value: "",
                valid: false,
                regex: /^\d+\s[A-z]+\s[A-z]+/,
            },
        },
        loading: false,
        validationPassed: null,
    };

    orderHandler = (event) => {
        event.preventDefault();
        for (const key in this.state.customer) {
            if(!this.state.customer[key].valid) {
                this.setState({validationPassed: false})
                return;
            }
        }
        this.setState({ loading: true });
        this.setState({validationPassed:true});
        
        const order = {
            ingredients: this.props.ingreds,
            price: this.props.ingredsPrice,
            customer: {
                name: this.state.name.value,
                email: this.state.email.value,
                address: this.state.address.value,
            },
        };
        this.props.purchase(order);
    };

    isValid = (element, regex) => {

        return regex.test(element);
    }

    inputChangeHandler = (event, elementName) => {
        const updatedState = {...this.state.customer};
        this.setState({validationPassed: null});
        updatedState[elementName].value = event.target.value;
        updatedState[elementName].valid = this.isValid(updatedState[elementName].value, updatedState[elementName].regex);
        this.setState({
            ...updatedState,
        });
    }

    render() {
        console.log(this.props.purchased);
        const form = (
            <React.Fragment>
                {this.props.purchased ? <Redirect to="/burger" /> : null}
                <h3>Enter your contact information</h3>
                <form onSubmit={this.orderHandler}>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        valid={this.state.customer.name.valid.toString()}
                        onChange={(event) => this.inputChangeHandler(event, "name")}
                        value={this.state.customer.name.value}

                    />
                    <Input
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                        valid={this.state.customer.email.valid.toString()}
                        onChange={(event) => this.inputChangeHandler(event, "email")}
                        value={this.state.customer.email.value}
                    />
                    <Input
                        type="text"
                        name="address"
                        placeholder="Address ('1905 year street')"
                        valid={this.state.customer.address.valid.toString()}
                        onChange={(event) => this.inputChangeHandler(event, "address")}
                        value={this.state.customer.address.value}
                    />
                    <Button
                        type="Success"
                        name="ORDER!"
                    />
                </form>
            </React.Fragment>
        );
        return (
            <div className={styles.ContactInfo}>
                {this.props.purchasing ? <Spinner /> : form}
                {this.state.validationPassed === false ? <h1 style={{color: "red", fontSize: "20px"}}>Form filled wrong!</h1> : null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ingreds: state.burgerBuilder.ingredients,
        ingredsPrice: state.burgerBuilder.totalPrice,
        purchasing: state.order.purchasing,
        purchased: state.order.purchased,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        purchase: (orderData) => dispatch(actions.purchaseBurgerStart(orderData)),
        initPurchasing: () => dispatch(actions.purchaseInit()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(withError(ContactInfo,axios)));
