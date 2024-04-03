import Link from "next/link";
import styles from "./style.module.css";
import cn from "clsx";
const Galery = () => {
  return (
    <div className={styles.container}>
      <div className={cn(styles.galery, styles.galery1)}>
        <Link href="shop" className={styles.link}>
          <h2 className={styles.galery__h2}>Organic Juice</h2>
        </Link>
      </div>
      <div className={cn(styles.galery, styles.galery2)}>
        <Link href="shop" className={styles.link}>
          <h2 className={styles.galery__h2}>Organic Juice</h2>
        </Link>
      </div>
      <div className={cn(styles.galery, styles.galery3)}>
        <Link href="shop" className={styles.link}>
          <h2 className={styles.galery__h2}>Organic Juice</h2>
        </Link>
      </div>
    </div>
  );
};

export default Galery;
