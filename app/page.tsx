import Banner from "@/components/HomePage/Banner/Banner";
import styles from "./page.module.css";
import About from "@/components/HomePage/About/About";
import Product from "@/components/HomePage/Product/Product";
import Econis from "@/components/HomePage/Econis/Econis";
import Galery from "@/components/HomePage/Galery/Galery";
import Blog from "@/components/HomePage/Blog/Blog";
import {
  fetchBlogs,
  fetchProducts,
  fetchProductsRecomended,
  fetchSliders,
} from "@/utils/api/requrs";
import Offer from "@/components/HomePage/Offer/Offer";
import Slider from "@/components/HomePage/Slider/Slider";

export const revalidate = 10;

export default async function Home() {
  const dataBlog = await fetchBlogs();
  const dataProducts = await fetchProducts();
  const dataRecomended = await fetchProductsRecomended();
  const dataSliders = await fetchSliders();

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
      <Product products={dataProducts.data} />
      <Slider sliders={dataSliders.data} />
      <Offer recomended={dataRecomended.data} />
      <Econis />
      <Galery />
      <Blog blogs={dataBlog.data} />
    </div>
  );
}
