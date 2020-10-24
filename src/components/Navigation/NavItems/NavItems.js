import React from "react";

import styles from "./NavItems.module.css";
import NavItem from "./NavItem/NavItem";

const navItems = (props) => {

    return (
        <ul className={styles.NavItems}>
            <NavItem link="/burger" >BurgerBuilder</NavItem>
            <NavItem link="/my-orders">My Orders</NavItem>
        </ul>
    );

}

export default navItems;