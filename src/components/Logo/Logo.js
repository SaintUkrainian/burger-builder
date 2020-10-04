import React from "react";

import burgerLogo from "../../assets/images/burger-logo.png";
import styles from "./Logo.module.css"

const logo = (props) => {
    return (
        <div className={styles.Logo} style={{height: props.height, marginBottom: props.margin}}>
            <img src={burgerLogo} alt="burger-logo"/>
        </div>
    );
}

export default logo;