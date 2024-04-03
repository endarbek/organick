import { ISliders } from "@/types/slider";
import styles from "./style.module.css";
import SLide from "./Slide";

interface ISlidersProps {
  sliders: ISliders[];
}
const Slider = ({ sliders }: ISlidersProps) => {
  return (
    <div className={styles.container}>
      <div className={styles.testimonial}>
        <div className={styles.content}>
          <div className={styles.heading}>
            <h4 className={styles.heading__h4}>Testimonial</h4>
            <h1 className={styles.heading__h1}>What Our Customer Saying?</h1>
          </div>
        </div>
        <SLide slide={sliders} />
        <hr className={styles.line} />
        <div className={styles.counters}>
          <div className={styles.counter}>
            <span className={styles.counter__span}>100%</span>
            <h6 className={styles.counter__h6}>Organick</h6>
          </div>
          <div className={styles.counter}>
            <span className={styles.counter__span}>285</span>
            <h6 className={styles.counter__h6}>Active Product</h6>
          </div>
          <div className={styles.counter}>
            <span className={styles.counter__span}>350+</span>
            <h6 className={styles.counter__h6}>Organick Orchards</h6>
          </div>
          <div className={styles.counter}>
            <span className={styles.counter__span}>25+</span>
            <h6 className={styles.counter__h6}>Years of Farming</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
