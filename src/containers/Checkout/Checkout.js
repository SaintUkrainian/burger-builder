import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router";

import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";
import ContactInfo from "../ContactInfo/ContactInfo";


class Checkout extends Component {


    render() {
        return (
            <div>
                {this.props.price ? null : <Redirect to="/burger" />}
                <CheckoutSummary ingredients={this.props.ingreds} price={this.props.price}/>
                <Route path={this.props.match.url + "/contact-info"} component={ContactInfo} />
            </div>
        );
    } 
}

const mapStateToProps = state => {
    return {
        ingreds: state.burgerBuilder.ingredients,
        price: state.burgerBuilder.totalPrice,
    }
}

export default connect(mapStateToProps)(Checkout);


