"use client";
import { IProducts } from "@/types/products";
import styles from "./style.module.css";
import Button from "../../shared/UI/Button/Button";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface IProductProps {
  recomended: IProducts[];
}

const Offer = ({ recomended }: IProductProps) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <div className={styles.recomended}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h5 className={styles.heading__h5}>Offer</h5>
            <p className={styles.heading__p}>We Offer Organic For You</p>
          </div>
          <Link href="shop" className={styles.link}>
            <Button background={"yellow"}>
              View All Product <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Button>
          </Link>
        </div>
        <div className={styles.products}>
          {recomended.map((product) => (
            <div key={product.id} className={styles.product}>
              <p className={styles.product__p}>{product.name}</p>
              <Image
                onClick={() => router.push(`shop-single/${product.id}`)}
                className={styles.product__image}
                src={`/img/${product.image.name}`}
                alt="dsfsda"
                width={270}
                height={270}
              />
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
                    <h2
                      className={styles.price__h2}
                    >{`$${product.price}.00`}</h2>
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

export default Offer;
