import React, { Component } from "react";
import { connect } from "react-redux";
import { Route } from "react-router";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactInfo from "../ContactInfo/ContactInfo";


class Checkout extends Component {

    render() {
        return (
            <div>
                <CheckoutSummary ingredients={this.props.ingreds} price={this.props.price}/>
                <Route path={this.props.match.url + "/contact-info"} component={ContactInfo} />
            </div>
        );
    } 
}

const mapStateToProps = state => {
    return {
        ingreds: state.ingredients,
        price: state.totalPrice,
    }
}

export default connect(mapStateToProps)(Checkout);


