import Image from "next/image";
import React from "react";
import styles from "./styles.module.css";
import { fetchProducts } from "@/utils/api/requrs";
import { useRouter } from "next/navigation";
const Shop = async () => {
  // const router = useRouter();
  const data = await fetchProducts()
  const products = data.data;
  return (
    <div>
      <h1 className={styles.con}>SHOP</h1>
      <div className={styles.card__img}>
      </div>
      <div className={styles.container}>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <p className={styles.product__p}>{product.categories?.title}</p>
            <Image
              // onClick={() => router.push(`shop-single/${product.id}`)}
              className={styles.product__image}
              src={`/img/${product.image.name}`}
              alt={product.image.name}
              width={335}
              height={324}
            />
            <div className={styles.product__rating}>
              <h1
                className={styles.product__rating__h1}
                // onClick={() => router.push(`shop-single/${product.id}`)}
              >
                {product.title}
              </h1>
              <hr className={styles.line} />
              <div className={styles.rating}>
                <div className={styles.price}>
                  <h3 className={styles.price__h3}>$20.00</h3>
                  <h2 className={styles.price__h2}>{`$${product.price}.00`}</h2>
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

export default Shop;
