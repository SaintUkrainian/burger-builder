import React from "react";

import styles from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const navItems = (props) => {
    return (
        <ul className={styles.NavItems}>
            <NavItem link="/burger">BurgerBuilder</NavItem>
            {props.token ? (
                <NavItem link="/my-orders">Orders</NavItem>
            ) : null}
            {!props.token ? (
                <NavItem link="/auth">Sign Up</NavItem>
            ) : (
                <NavItem link="/logout">Logout</NavItem>
            )}
        </ul>
    );
};

export default navItems;
