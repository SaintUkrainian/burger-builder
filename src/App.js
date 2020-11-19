import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";
import Logout from "./containers/Auth/Logout/Logout";
import { connect } from "react-redux";

class App extends Component {
    render() {
        return (
                <Layout>
                    <Switch>
                        <Route path="/burger" component={BurgerBuilder}/>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/my-orders" component={Orders} />
                        <Route path="/auth" component={Auth} />
                        <Route path="/logout" component={Logout} />
                        <Redirect from="/" to="/burger"/>
                    </Switch>
                </Layout>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.auth.token,
    }
}

export default connect(mapStateToProps)(App);
