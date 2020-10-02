import React from "react";
import styles from "./BuildControl.module.css"

const buildControl = (props) => {
    
    return (
    
        <div className={styles.BuildControl}>
            <div className={styles.Label}>{props.label}</div>
            <button className={styles.Less} onClick={props.removed.bind(null, props.type)} disabled={props.disabled}>Less</button>
            <button className={styles.More} onClick={props.added.bind(null, props.type)}>More</button>
        </div>
    );
};

export default buildControl;
