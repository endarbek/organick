import Image from "next/image";
import styles from "./style.module.css";
import Button from "../shared/UI/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <Image
          className={styles.container__image}
          src="/img/about-orange.jpg"
          alt="ornage"
          width={911}
          height={767}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
        <div className={styles.about}>
          <div className={styles.content}>
            <h4 className={styles.content__h4}>About Us</h4>
            <h2 className={styles.content__h2}>
              We Believe in Working Accredited Farmers
            </h2>
            <p className={styles.content__p}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className={styles.points}>
            <div className={styles.point}>
              <div className={styles.point__image}>
                <Image
                  src="img/about-foods.svg"
                  alt="foods"
                  width={46}
                  height={46}
                />
              </div>
              <div className={styles.point__content}>
                <h2 className={styles.point__content__h2}>
                  Organic Foods Only
                </h2>
                <p className={styles.point__content__p}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className={styles.point}>
              <div className={styles.point__image}>
                <Image
                  src="img/about-quality.svg"
                  alt="foods"
                  width={46}
                  height={46}
                />
              </div>
              <div className={styles.point__content}>
                <h2 className={styles.point__content__h2}>Quality Standards</h2>
                <p className={styles.point__content__p}>
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
          </div>
          <Link href="shop" className={styles.link}>
            <Button background={"blue"}>
              Shop Now <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
