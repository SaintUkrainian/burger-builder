import React, { Component } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";

import Layout from "./components/Layout/Layout";
import BurgerBuilder from "./containers/BurgerBuilder/BurgerBuilder";
import Checkout from "./components/Checkout/Checkout";

class App extends Component {
    render() {
        return (
            <BrowserRouter basename="/burger-builder">
                <Layout>
                    <Switch>
                        <Route path="/burger" component={BurgerBuilder}/>
                        <Route path="/checkout" component={Checkout} />
                        <Redirect from="/" to="/burger"/>
                    </Switch>
                </Layout>
            </BrowserRouter>
        );
    }
}

export default App;
