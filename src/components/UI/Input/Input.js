import React from "react";

import styles from "./Input.module.css";

const input = (props) => {
    return (
        <div className={[styles.Input, props.valid === "true" ? styles.Valid : styles.Invalid].join(" ")}>
            <lable>{props.lable}</lable>
            <input {...props}/>
        </div>
    );
};

export default input;
