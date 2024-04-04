import Image from "next/image";
import styles from "./style.module.css";

const Econis = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <Image
          src="/img/econis.jpg"
          alt="econic"
          width={952}
          height={931}
          sizes="100vw"
          style={{
            width: "100%",
            height: "auto",
          }}
        />
      </div>
      <div className={styles.content}>
        <div className={styles.econis}>
          <div className={styles.heading}>
            <h4 className={styles.heading__h4}>Eco Friendly</h4>
            <h1 className={styles.heading__h1}>
              Econis is a Friendly Organic Store
            </h1>
          </div>
          <div className={styles.points}>
            <div className={styles.point}>
              <h3 className={styles.point__h3}>Start with Our Company First</h3>
              <p className={styles.point__p}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className={styles.point}>
              <h3 className={styles.point__h3}>Learn How to Grow Yourself</h3>
              <p className={styles.point__p}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
            <div className={styles.point}>
              <h3 className={styles.point__h3}>Farming Strategies of Today</h3>
              <p className={styles.point__p}>
                Sed ut perspiciatis unde omnis iste natus error sit voluptat
                accusantium doloremque laudantium. Sed ut perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Econis;
