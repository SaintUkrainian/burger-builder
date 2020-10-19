import React, { Component } from "react";

import Order from "../../components/Order/Order";
import axios from "../../axios-for-orders";
import Spinner from "../../components/UI/Spinner/Spinner";

class Orders extends Component {
    state = {
        orders: [],
        loading: true,
        error: false,
    };

    componentDidMount() {
        axios
            .get("/orders.json")
            .then((response) => {
                const orders = [];
                for (const key in response.data) {
                    orders.push(response.data[key]);
                }
                this.setState({ orders: orders });
                this.setState({ loading: false });
            })
            .catch((err) => {
                this.setState({ loading: false });
                this.setState({error: true});
            });
    }

    render() {
        return (
            <div>
                {this.state.loading ? (
                    <Spinner />
                ) : (
                    this.state.orders.map((order) => (
                        <Order
                            key={Math.random()}
                            ingredients={order.ingredients}
                            price={order.price}
                        />
                    ))
                )}
                {this.state.error ? <h1 style={{textAlign: "center"}}>An Error occured! Check your Internet connection.</h1> : null}
            </div>
        );
    }
}

export default Orders;
