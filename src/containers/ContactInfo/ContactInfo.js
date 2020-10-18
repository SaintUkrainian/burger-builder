import React, { Component } from "react";

import styles from "./ContactInfo.module.css";
import Button from "../../components/UI/Button/Button";
import Spinner from "../../components/UI/Spinner/Spinner";
import axios from "../../axios-for-orders";
import { withRouter } from "react-router";

class ContactInfo extends Component {
    state = {
        name: "",
        email: "",
        address: "",
        loading: false,
    };

    orderHandler = (event) => {
        event.preventDefault();
        console.log("Submiting the order!");
        this.setState({ loading: true });
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Denys Matsenko",
                email: "idanchik47@gmail.com",
                address: "Some street, 38a",
            },
        };
        axios
            .post("/orders.json", order)
            .then((response) => {
                this.setState({ loading: false });
                console.log(this.props);
                this.props.history.push("/burger");
            })
            .catch((err) => {
                this.setState({ loading: false });
            });
    };

    render() {
        console.log(this.props);
        const form = (
            <React.Fragment>
                <h3>Enter your contact information</h3>
                <form>
                    <input
                        className={styles.Input}
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                    />
                    <input
                        className={styles.Input}
                        type="text"
                        name="email"
                        placeholder="Enter your email"
                    />
                    <input
                        className={styles.Input}
                        type="text"
                        name="address"
                        placeholder="Enter your address"
                    />
                    <Button
                        type="Success"
                        name="ORDER!"
                        action={(event) => this.orderHandler(event)}
                    />
                </form>
            </React.Fragment>
        );
        return (
            <div className={styles.ContactInfo}>
                {this.state.loading ? <Spinner /> : form}
            </div>
        );
    }
}

export default withRouter(ContactInfo);
