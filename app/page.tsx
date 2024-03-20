import Banner from "@/components/Banner/Banner";
import styles from "./page.module.css";
import About from "@/components/About/About";
import Product from "@/components/Product";

export default function Home() {
  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.banner__offer}>
        <div className={styles.offer1}>
          <h4 className={styles.offer1__h4}>Natural!!</h4>
          <h3 className={styles.offer1__h3}>Get Garden Fresh Fruits</h3>
        </div>
        <div className={styles.offer2}>
          <h4 className={styles.offer2__h4}>Offer!!</h4>
          <h3 className={styles.offer2__h3}>Get 10% off on Vegetables</h3>
        </div>
      </div>
      <About />
      <Product />
    </div>
  );
}
