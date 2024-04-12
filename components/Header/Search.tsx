"use client";
import styles from "./style.module.css";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../shared/UI/Modal/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import Cart from "../Cart/Cart";
import { useCartContext } from "../CartContext/CartContext";
import { fetchProductsName } from "@/utils/api/requrs";
import useDebounce from "../../hooks/useDebounce";
import { IProducts } from "@/types/products";

const Search = () => {
  const [close, setClose] = useState(false);
  const orderCancelled = () => setClose(!close);
  const [results, setResults] = useState<IProducts[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const { cart } = useCartContext();
  const quantity = cart.length;

  const debouncedSearchTerm = useDebounce({ value: searchTerm, delay: 500 });
  useEffect(() => {
    if (debouncedSearchTerm) {
      setIsSearching(true);
      fetchProductsName(debouncedSearchTerm).then((results) => {
        setIsSearching(false);
        setResults(results.data);
      });
    } else {
      setResults([]);
    }
  }, [debouncedSearchTerm]);
  return (
    <div className={styles.search}>
      <Modal isVisible={close} close={orderCancelled}>
        <Cart close={orderCancelled} />
      </Modal>
      <div className={styles.inputs}>
        <input
          type="text"
          className={styles.input}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isSearching && <div className={styles.input__div}>Searching</div>}
        <button className={styles.inputs__button}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className={styles.serch} />
        </button>
        <div className={styles.result}>
          {results.map((result) => (
            <div key={result.id} className={styles.product}>
              <h4 className={styles.result__h4}>{result.title}</h4>
              {/* <h3>{result.categories?.title}</h3> */}
              <Image
                src={`/img/${result.image.name}`}
                alt={result.title}
                width={100}
                height={100}
              />
            </div>
          ))}
        </div>
      </div>
      <div className={styles.cart} onClick={orderCancelled}>
        <button className={styles.cart__button}>
          <Image src="/cart.svg" alt="cart" width={23.53} height={22} />
        </button>
        <h3 className={styles.cart__h3}>Cart ({quantity})</h3>
      </div>
    </div>
  );
};

export default Search;
