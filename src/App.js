import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./containers/Checkout/Checkout";
import Orders from "./containers/Orders/Orders";
import Auth from "./containers/Auth/Auth";

class App extends Component {
    render() {
        return (
                <Layout>
                    <Switch>
                        <Route path="/burger" component={BurgerBuilder}/>
                        <Route path="/checkout" component={Checkout} />
                        <Route path="/my-orders" component={Orders} />
                        <Route path="/auth" component={Auth} />
                        <Redirect from="/" to="/burger"/>
                    </Switch>
                </Layout>
        );
    }
}

export default App;
