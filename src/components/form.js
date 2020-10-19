import React from "react";
import styles from "./form.module.css";

const Form = () => {
  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
      <div className={styles.item}>
        <label for="name" className={styles.label}>
          Name
          <input name="name" type="text" />
        </label>
      </div>
      <div className={styles.item}>
        <label for="subject" className={styles.label}>
          Subject
          <input name="subject" type="text" />
        </label>
      </div>
      <div className={styles.item}>
        <label for="email" className={styles.label}>
          Email
          <input name="email" type="email" />
        </label>
      </div>
      <div className={styles.item}>
        <label for="message" className={styles.label}>
          Message
          <textarea rows="8" name="message" />
        </label>
      </div>
      <div>
        <button className={styles.button}>Send</button>
      </div>
    </form>
  );
};

export default Form;
