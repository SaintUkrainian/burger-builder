import React, { Component } from "react";
import AuthInput from "../../components/UI/Input/AuthInput/authInput";
import styles from "./Auth.module.css";
import * as actions from "../../store/actions/auth";
import { connect } from "react-redux";
import Spinner from "../../components/UI/Spinner/Spinner";

class Auth extends Component {
    state = {
        email: {
            value: "",
            valid: "",
            regex: /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/,
        },
        password: {
            value: "",
            valid: "",
            regex: /.{6,}/,
        },
        signInMode: false,
    };

    isValid = (element, regex) => {
        return regex.test(element);
    };

    submitLoginForm = (event) => {
        event.preventDefault();
        const updatedState = { ...this.state };
        updatedState.email.valid = this.isValid(
            this.state.email.value,
            this.state.email.regex
        );
        updatedState.password.valid = this.isValid(
            this.state.password.value,
            this.state.password.regex
        );
        this.setState(updatedState);
        if (this.state.email.valid && this.state.password.valid) {
            this.props.onLogin(
                this.state.email.value,
                this.state.password.value,
                this.state.signInMode
            );
        } else {
            return;
        }
    };

    onChangeHandler = (event, element) => {
        const updatedState = { ...this.state };
        updatedState[element].value = event.target.value;
        this.setState(updatedState);
    };

    toggleAuthForm = () => {
        this.props.clearError();
        this.setState((prevState) => {
            return {
                ...this.state,
                signInMode: !prevState.signInMode,
                email: {
                    ...this.state.email,
                    valid: "",
                },
                password: {
                    ...this.state.password,
                    valid: "",
                },
            };
        });
    };

    render() {

        return (
            <React.Fragment>
                {/* <Backdrop show/> */}
                {this.props.loading ? (
                    <Spinner />
                ) : (
                    <div className={styles.Auth}>
                        <form onSubmit={(event) => this.submitLoginForm(event)}>
                            <h1 style={{ margin: "auto" }}>
                                {this.state.signInMode ? "Sign In" : "Sign Up"}
                            </h1>
                            <p
                                style={{
                                    color: "red",
                                    margin: "auto",
                                    fontSize: "20px",
                                }}
                            >
                                {this.props.error && !this.state.signInMode
                                    ? "Email is already registered"
                                    : this.props.error
                                    ? "Entered wrong data"
                                    : null}
                            </p>
                            <AuthInput
                                onChange={(event) =>
                                    this.onChangeHandler(event, "email")
                                }
                                name="Email"
                                type="text"
                                valid={this.state.email.valid}
                                value={this.state.email.value}
                            />
                            <AuthInput
                                onChange={(event) =>
                                    this.onChangeHandler(event, "password")
                                }
                                name="Password"
                                type="password"
                                valid={this.state.password.valid}
                                value={this.state.password.value}
                            />
                            <button type="submit">
                                {this.state.signInMode ? "Sign In" : "Sign Up"}
                            </button>
                        </form>
                        <button onClick={this.toggleAuthForm}>
                            Switch to{" "}
                            {!this.state.signInMode ? "Sign In" : "Sign Up"}
                        </button>
                    </div>
                )}
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onLogin: (email, password, signInMode) =>
            dispatch(actions.login(email, password, signInMode)),
        clearError: () => dispatch(actions.clearError()),
    };
};

const mapStateToProps = (state) => {
    return {
        token: state.auth.token,
        userId: state.auth.userId,
        loading: state.auth.loading,
        error: state.auth.error,
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
