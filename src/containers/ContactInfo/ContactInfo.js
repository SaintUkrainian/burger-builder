import React, { Component } from "react";

import styles from "./ContactInfo.module.css";
import Button from "../../components/UI/Button/Button";

class ContactInfo extends Component {
    state = {
        name: "",
        email: "",
        address: "",
    };

    render() {
        return (
            <div className={styles.ContactInfo}>
                <h3>Enter your contact information</h3>
               <form>
                    <input className={styles.Input} type="text" name="name" placeholder="Enter your name" />
                    <input className={styles.Input} type="text" name="email" placeholder="Enter your email" />
                    <input className={styles.Input} type="text" name="address" placeholder="Enter your address" />
                    <Button type="Success" name="ORDER!" action={() => console.log("Submitting data...")} />
               </form>
            </div>
        );
    }
}

export default ContactInfo;
