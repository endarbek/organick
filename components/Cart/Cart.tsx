import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
// import Link from "next/link";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/UI/Button/Button";
import Link from "next/link";
import { useState } from "react";
interface ICart {
  close: () => void;
}
const Cart = ({ close }: ICart) => {
  const [cart, setCart] = useState([]);

  const addProduct = () => {
    setCart([...cart, item]);
  };
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
        <Link href="shop">
          <Button click={close} background={"blue"}>
            Go To Shopping
            <FontAwesomeIcon
              icon={faArrowAltCircleRight}
              className={styles.arrow}
            />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Cart;
