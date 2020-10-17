import React from "react";

import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import styles from "./SideDrawer.module.css";
import Backdrop from "../../UI/Backdrop/Backdrop";
import Aux from "../../../hoc/Auxilary/Auxilary";

const sideDrawer = (props) => {
    
    return (
        <Aux>
        <Backdrop show={props.show} closeModal={props.closeModal}/>
        <div className={[styles.SideDrawer, props.show ? styles.Open: styles.Close].join(" ")}>
                <Logo height="11%" margin="32px"/>
            <nav>
                <NavItems />
            </nav>
        </div>
        </Aux>
    );
};

export default sideDrawer;
