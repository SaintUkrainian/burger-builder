import React from "react";

import styles from "./authInput.module.css";

const authInput = (props) => (
    <div className={[styles.Input, props.valid === false ? styles.Invalid : ""].join(" ")}>
        <input
            type={props.type}
            onChange={props.onChange}
            placeholder={props.name}
            value={props.value}
        />
    </div>
);

export default authInput;
