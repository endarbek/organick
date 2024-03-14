import styles from "./style.module.css";
import Button from "../shared/UI/Button/Button";

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
          <Button background="blue" size={"wide"}>
            Subscribe
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
