"use client";
import { IProducts } from "@/types/products";
import Image from "next/image";
import styles from "./style.module.css";
import Button from "../shared/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface IProductProps {
  products: IProducts[];
}

const Product = ({ products }: IProductProps) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.categories}>
        <h5 className={styles.categories__h5}>Categories </h5>
        <h1 className={styles.categories__h1}>Our Products </h1>
      </div>
      <div className={styles.products}>
        {products.map((product) => (
          <div key={product.id} className={styles.product}>
            <p className={styles.product__p}>{product.name}</p>
            <Link href="shop-single" className={styles.link}>
              <Image
                className={styles.product__image}
                src={`/img/${product.image.name}`}
                alt={product.image.name}
                width={335}
                height={324}
              />
            </Link>
            <div className={styles.product__rating}>
              <h1
                className={styles.product__rating__h1}
                onClick={() => router.push(`shop-single/${product.id}`)}
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
      <Button background={"blue"}>
        Load More <FontAwesomeIcon icon={faArrowAltCircleRight} />
      </Button>
    </div>
  );
};

export default Product;
