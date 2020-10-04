import React from "react";

import styles from "./Toolbar.module.css";
import Logo from "../../Logo/Logo";

const toolbar = (props) => { 
    return (
        <header className={styles.Toolbar}>
            <div>Menu</div>
            <Logo />
            <nav>
                ...
            </nav>
        </header>
    );
}


export default toolbar;