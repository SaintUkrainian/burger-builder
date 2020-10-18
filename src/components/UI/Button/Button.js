import React from "react";
import styles from "./Button.module.css"

const button = (props) => {
    return <button onClick={props.action} disabled={props.disable} className={[styles.Button, styles[props.type]].join(" ")}>{props.name}</button>;
};

export default button;
