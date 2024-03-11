import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
import Link from "next/link";
import {
  faArrowAltCircleRight,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
interface ICart {
  close: () => void;
}
const Cart = ({ close }: ICart) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.cart}>
        <h1 className={styles.carth1}>Your Cart</h1>
        <FontAwesomeIcon
          icon={faXmark}
          className={styles.xmark}
          onClick={close}
        />
      </div>
      <div className={styles.found}>
        <h2>No items found</h2>
        <Link href="/shop" className={styles.button} onClick={close}>
          Go To Shopping{" "}
          <FontAwesomeIcon
            icon={faArrowAltCircleRight}
            className={styles.arrow}
          />
        </Link>
      </div>
    </div>
  );
};

export default Cart;
