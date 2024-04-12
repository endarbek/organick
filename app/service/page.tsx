import Button from "@/components/shared/UI/Button/Button";
import styles from "../service/style.module.css";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <h1 className={styles.asideTitle}>Services</h1>
      </aside>
      <figure className={styles.figure}>
        <div className={styles.con1}>
          <div className={styles.info1}>
            <Image src="/Icon.svg" alt="" width={42} height={42} />
            <h3>Dairy Products</h3>
            <p className={styles.text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className={styles.info1}>
            <Image src="/Icon2.svg" alt="" width={42} height={42} />
            <h3>Store Services</h3>
            <p className={styles.text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className={styles.info1}>
            <Image src="/Icon3.svg" alt="" width={42} height={42} />
            <h3>Delivery Services</h3>
            <p className={styles.text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
        </div>
        <div className={styles.image}>
          <Image
            src="/img/services.png"
            alt=""
            width={743}
            height={990}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className={styles.con2}>
          <div className={styles.info2}>
            <Image src="/Icon4.svg" alt="" width={42} height={42} />
            <h3>Agricultural Services</h3>
            <p className={styles.text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className={styles.info2}>
            <Image src="/Icon5.svg" alt="" width={42} height={42} />
            <h3>Organic Products</h3>
            <p className={styles.text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
              accusantium doloremqlaudantium. Sed ut perspiciatis
            </p>
          </div>
          <div className={styles.info2}>
            <Image src="/Icon6.svg" alt="" width={42} height={42} />
            <h3>Dairy Products</h3>
            <p className={styles.text}>
              Sed ut perspiciatis unde omnis iste natus error sit voluptat
            </p>
            accusantium doloremqlaudantium. Sed ut perfpiciatis
          </div>
        </div>
      </figure>
      <div className={styles.btn}>
        <Link href="service-single">
          <button className={styles.btnSer}>
            Explore More
            <Image className={styles.btnSvg} src="Aerrow.svg" alt="" width={19} height={19} />
          </button>
        </Link>
      </div>
      <div className={styles.wrapp}>
        <div className={styles.footer}>
          <h1 className={styles.video}>Organic Only</h1>
          <p className={styles.text1}>Everyday Fresh & Clean</p>
          <p className={styles.text2}>
            Simply dummy text of the printing and typesetting industry.
            <br></br>
            Lorem had ceased to been the industry's standard dummy text ever
            since the
          </p>
          <button className={styles.futBtn}>
            <Image src="Yt.svg" alt="" width={21} height={21} />
          </button>
        </div>
      </div>
    </div>
  );
};
``;

export default Service;
