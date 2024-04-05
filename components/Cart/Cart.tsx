"use client";
import { faXmark } from "@fortawesome/free-solid-svg-icons/faXmark";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";
// import Link from "next/link";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Button from "../shared/UI/Button/Button";
import Link from "next/link";
import { useCartContext } from "../CartContext/CartContext";
import { IProducts } from "@/types/products";
import CartNumber from "./CartNumber";
import { useState } from "react";

interface ICart {
  close: () => void;
  cart: IProducts[];
}
const Cart = ({ close }: ICart) => {
  const { cart, total } = useCartContext();
  const [isShow, setIsShow] = useState(false);
  const handleClose = () => {
    setIsShow(true);
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
        {cart.length === 0 ? (
          <>
            <h2 className={styles.item}>No items found.</h2>
            <Link href="/shop">
              <Button click={close} background={"blue"}>
                Go To Shopping
                <FontAwesomeIcon
                  icon={faArrowAltCircleRight}
                  className={styles.arrow}
                />
              </Button>
            </Link>
          </>
        ) : (
          <>
            <div className={styles.cartItems}>
              {cart.map((item) => (
                <CartNumber key={item.id} item={item} />
              ))}
            </div>
            <div className={styles.price}>
              <h1 className={styles.price__h1}>Subtotal</h1>
              <h4 className={styles.price__h4}>{`$ ${total}.00 USD`}</h4>
            </div>
            <Button background={"blue"} click={handleClose}>
              Continie To Checkout{" "}
              <FontAwesomeIcon
                icon={faArrowAltCircleRight}
                className={styles.arrow}
              />
            </Button>
            {isShow && (
              <span className={styles.disabled}>
                Checkout is disabled on this site.
              </span>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
