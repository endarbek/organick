"use client";
import { IProducts } from "@/types/products";
import Image from "next/image";
import styles from "./style.module.css";
import Button from "@/components/shared/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import cn from "clsx";
import { useCartContext } from "@/components/CartContext/CartContext";
// import { useState } from "react";
import Quantity from "@/components/Quantity/Quantity";
import { useState } from "react";
import { useRouter } from "next/navigation";
interface IProduct {
  product: IProducts;
}
const ShopSingle = ({ product }: IProduct) => {
  const router = useRouter();

  const { addProduct } = useCartContext();
  const [number, setNumber] = useState(1);

  const addNumber = () => {
    setNumber(number + 1);
  };
  const deleteNumber = () => {
    if (number > 1) {
      setNumber((prevNumber) => prevNumber - 1);
    }
  };
  return (
    <div className={styles.container}>
      <div className={styles.shop_single}>Shop-Single</div>
      <div className={styles.details}>
        <div className={styles.image}>
          <Image
            className={styles.image_image}
            src={`/img/${product.image.name}`}
            alt={product.name}
            width={500}
            height={500}
            sizes="100vw"
            style={{
              width: "100%",
              height: "100%",
            }}
          />
          <p className={styles.product__p}>{product.categories?.title}</p>
        </div>
        <div className={styles.detail}>
          <div className={styles.content}>
            <div className={styles.name}>
              <h1 className={styles.detail__h1}>{product.title}</h1>
              <Image src="/img/star.png" alt="star" width={84} height={18} />
              <div className={styles.price}>
                <h3 className={styles.price__h3}>$20.00</h3>
                <h2 className={styles.price__h2}>{`$${product.price}.00`}</h2>
              </div>
            </div>
            <p className={styles.detail__p}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className={styles.form}>
            <div className={styles.form__div}>
              <h1 className={styles.form__h1}>Quantity:</h1>
              <Quantity number={number} add={addNumber} remove={deleteNumber} />
            </div>
            <Button
              background={"blue"}
              click={() => addProduct({ ...product, number })}
            >
              Add To Cart <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Button>
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <div className={styles.title}>
          <h3 className={cn(styles.title__h3, styles.title__blue)}>
            Product Description
          </h3>
          <h3 className={cn(styles.title__h3, styles.title__white)}>
            Additional Info
          </h3>
        </div>
        <p className={styles.information__p}>
          Welcome to the world of natural and organic. Here you can discover the
          bounty of nature. We have grown on the principles of health, ecology,
          and care. We aim to give our customers a healthy chemical-free meal
          for perfect nutrition. It offers about 8–10% carbs. Simple sugars —
          such as glucose and fructose — make up 70% and 80% of the carbs in
          raw.
        </p>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.products}>
          {product.related?.map((relate) => (
            <div key={product.id} className={styles.product}>
              <p className={styles.product__pp}>{relate.categories?.title}</p>
              <Image
                onClick={() => router.push(`${relate.id}`)}
                className={styles.product__image}
                src={`/img/${relate.image.name}`}
                alt={relate.image.name}
                width={335}
                height={324}
              />
              <div className={styles.product__rating}>
                <h1
                  className={styles.product__rating__h1}
                  onClick={() => router.push(`${relate.id}`)}
                >
                  {relate.title}
                </h1>
                <hr className={styles.line} />
                <div className={styles.rating}>
                  <div className={styles.price}>
                    <h3 className={styles.price__h3}>$20.00</h3>
                    <h2
                      className={styles.price__h2}
                    >{`$${relate.price}.00`}</h2>
                  </div>
                  <Image
                    src="/img/star.png"
                    alt="rating"
                    width={83}
                    height={18}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopSingle;
