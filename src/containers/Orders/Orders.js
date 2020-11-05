import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios-for-orders";
import Spinner from "../../components/UI/Spinner/Spinner";
import { connect } from "react-redux";
import * as actions from "../../store/actions/order";
import withError from "../../hoc/withErrorHandling/withErrorHandling";
import order from "../../components/Order/Order";

class Orders extends Component {
    componentDidMount() {
        // axios
        //     .get("/orders.json")
        //     .then((response) => {
        //         const orders = [];
        //         for (const key in response.data) {
        //             orders.push(response.data[key]);
        //         }
        //         this.setState({ orders: orders });
        //         this.setState({ loading: false });
        //     })
        //     .catch((err) => {
        //         this.setState({ loading: false });
        //         this.setState({error: true});
        //     });

        this.props.initOrders();
    }

    render() {
        let myOrders = null;
        console.log(this.props.orders);

        if (!this.props.ordersFetched) {
            myOrders = <Spinner />;
        }

        if (this.props.ordersFetched) {
            
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

        return <div>{myOrders}</div>;
    }
}

const mapStateToProps = (state) => {
    return {
        orders: state.order.orders,
        ordersFetched: state.order.fetchedOrders,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        initOrders: () => dispatch(actions.initOrders()),
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withError(Orders, axios));
