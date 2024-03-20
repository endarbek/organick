import Link from "next/link";
import Button from "../shared/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import styles from "./style.module.css";

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.content}>
        <h3 className={styles.content__h3}>100% Natural Food</h3>
        <h1 className={styles.content__h1}>
          Choose the best healthier way of life
        </h1>
        <Link href="about" className={styles.link}>
          <Button background={"yellow"}>
            Explore Now
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
