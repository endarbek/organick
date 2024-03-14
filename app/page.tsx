import Image from "next/image";
import styles from "./page.module.css";
import Button from "@/components/shared/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div className="banner">
      <div className={styles.banner}>
        <div className={styles.content}>
          <h3 className={styles.content__h3}>100% Natural Food</h3>
          <h1 className={styles.content__h1}>
            Choose the best healthier way of life
          </h1>
          <Button background={"yellow"}>
            Explore Now
            <FontAwesomeIcon icon={faArrowAltCircleRight} />
          </Button>
        </div>
      </div>
    </div>
  );
}
