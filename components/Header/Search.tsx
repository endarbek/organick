"use client";
import styles from "./style.module.css";
import Image from "next/image";
import { useState } from "react";
import Modal from "../shared/UI/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";

const Search = () => {
  const [close, setClose] = useState(false);

  const orderCancelled = () => setClose(!close);
  return (
    <div className={styles.search}>
      <Modal isVisible={close} close={orderCancelled}>
        <Cart close={orderCancelled} />
      </Modal>
      <div className={styles.inputs}>
        <input type="text" className={styles.input} />
        <button className={styles.inputs__button}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.serch} />
        </button>
      </div>
      <div className={styles.cart} onClick={orderCancelled}>
        <button className={styles.cart__button}>
          <Image src="/cart.svg" alt="cart" width={23.53} height={22} />
        </button>
        <h3>Cart (0)</h3>
      </div>
    </div>
  );
};

export default Search;
