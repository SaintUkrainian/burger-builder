import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios-for-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actions from "../../store/actions/order";
import withError from "../../hoc/withErrorHandling/withErrorHandling";
import { Redirect } from "react-router";

class Orders extends Component {
    componentDidMount() {
        this.props.initOrders(this.props.token);
    }

    render() {
        let myOrders = null;
        console.log(this.props.orders);

        if (!this.props.ordersFetched) {
            myOrders = <Spinner />;
        } else if (this.props.ordersFetched) {
            if (this.props.orders.length === 0) {
                myOrders = <h1>You don't have any orders yet :(</h1>;
            } else {
                myOrders = this.props.orders.map((order) => (
                    <Order
                        key={Math.random()}
                        ingredients={order.ingredients}
                        price={order.price}
                    />
                ));
            }
        } 
        if(this.props.error) {
            myOrders = <h1>You are not authorized!</h1>;
        }

        return <div>{this.props.token ? myOrders : <Redirect to="/burger" />}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        ordersFetched: state.order.fetchedOrders,
        token: state.auth.token,
        error: state.order.error,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initOrders: (token) => dispatch(actions.initOrders(token)),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withError(Orders, axios));
