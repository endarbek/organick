import { IProducts } from "@/types/products";
import Image from "next/image";
import styles from "./style.module.css";
import Button from "@/components/shared/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
interface IProduct {
  product: IProducts;
}
const ShopSingle = ({ product }: IProduct) => {
  return (
    <div className={styles.container}>
      <div className={styles.shop_single}>Shop-Single</div>
      <div className={styles.details}>
        <div className={styles.image}>
          <Image
            className={styles.image_image}
            src={`/img/${product.image.name}`}
            alt={product.name}
            width={600}
            height={600}
            sizes="100vw"
            style={{
              width: "100%",
            }}
          />
          <p className={styles.product__p}>{product.name}</p>
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
          <form className={styles.form}>
            <div className={styles.form__div}>
              <h1 className={styles.form__h1}>Quantity:</h1>
              <input type="number" className={styles.form__input} />
            </div>
            <Button background={"blue"}>
              Add To Cart <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ShopSingle;
