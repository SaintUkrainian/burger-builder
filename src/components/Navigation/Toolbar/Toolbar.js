import React from "react";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";
import NavItems from "../NavItems/NavItems";
import DrawerToggle from "../SideDrawer/DrawerToggle/DrawerToggle";

const toolbar = (props) => {
    return (
        <header className={styles.Toolbar}>
            <DrawerToggle openModal={props.openModal} />
            <Logo height="80%" />
            <div className={styles.DesktopOnly}>
                <NavItems token={props.token} />
            </div>
        </header>
    );
};

export default toolbar;
