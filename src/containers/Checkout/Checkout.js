import React, { Component } from "react";
import { Route } from "react-router";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactInfo from "../ContactInfo/ContactInfo";


class Checkout extends Component {

    state = {
        ingredients: this.props.match.params.ingredients,
        price: this.props.match.params.price,
    }

    componentDidMount() {
        const query = new URLSearchParams(this.props.location.search);
        const ingredients = {}
        for (const param of query.entries()) {
            if(param[0] === "totalPrice") {
                this.setState({price: +param[1]})
            } else {
                ingredients[param[0]] = +param[1];
            }
        }
        this.setState({ingredients: ingredients})
    }

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.state.ingredients} price={this.state.price}/>
                <Route path={this.props.match.url + "/contact-info"} render={() => (<ContactInfo ingredients={this.state.ingredients} price={this.state.price}/>)} />
            </div>
        );
    } 
}

export default Checkout;


