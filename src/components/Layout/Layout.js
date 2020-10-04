import React, { Component } from "react";

import Toolbar from "../Navigation/Toolbar/Toolbar";
import Aux from "../../hoc/Auxilary/Auxilary";
import styles from "./Layout.module.css";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {show: false};
    closeModalHandler = () => {
        this.setState({show: false});
    }

    openModalHandler = () => {
        this.setState({show: true});
    }
    render() {
        return (
            <Aux>
                <SideDrawer show={this.state.show} closeModal={this.closeModalHandler} />
                <Toolbar openModal={this.openModalHandler}/>
                <main className={styles.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
