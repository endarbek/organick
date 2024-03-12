import React from "react";
import styles from "./style.module.css";

const Newsletter = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <h1 className={styles.wrap__h1}>Subscribe to our Newsletter</h1>
        <form className={styles.form}>
          <input
            type="email"
            placeholder="Your email address"
            className={styles.form__input}
          />
          <button className={styles.form__button}>Subscribe</button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
