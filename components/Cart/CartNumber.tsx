"use client";
import Image from "next/image";
import styles from "./style.module.css";
import Button from "../shared/UI/Button/Button";
import Quantity from "../Quantity/Quantity";
import { useCartContext } from "../CartContext/CartContext";
import { useState } from "react";
import { BasketProduct } from "@/types/products";
import { log } from "console";

interface Count {
  item: BasketProduct;
}

export default function CartNumber({ item }: Count) {
  const { removeProduct, addPosition, removePosition } = useCartContext();
  const [count, setCount] = useState(item.number);

  const addCount = () => {
    setCount((count) => count + 1);
    addPosition(item.id);
  };
  const removeCount = () => {
    setCount((count) => count - 1);
    removePosition(item.id);
  };
  return (
    <div className={styles.cartItem} key={item.id}>
      <Image
        src={`/img/${item.image.name}`}
        alt={item.image.name}
        width={60}
        height={60}
      />
      <div className={styles.description}>
        <h1 className={styles.description__h1}>{item.name}</h1>
        <h4 className={styles.description__h4}>{`$ ${item.price}.00 USD`}</h4>
        <Button background="border" click={() => removeProduct(item.id)}>
          Remove
        </Button>
      </div>
      <Quantity number={count} add={addCount} remove={removeCount} />
    </div>
  );
}
