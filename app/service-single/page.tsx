import Image from "next/image";
import styles from "./style.module.css";
import Button from "@/components/shared/UI/Button/Button";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div>
      <main className={styles.main}>
        <h1 className={styles.mainTitle}>Quality Standard</h1>
      </main>
      <section className={styles.section}>
        <div className={styles.sectionConImage}>
          <Image
            className={styles.sectionImage}
            src="/PhotoSingle.jpg"
            alt=""
            width={1205}
            height={638}
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>
      <figure className={styles.figure}>
        <div className={styles.figureContainer}>
          <div className={styles.figureTitleInfo}>
            <h1 className={styles.figureTitle}>Organic Store Services</h1>
            <p className={styles.figureInfo}>
              t is a long established fact that a reader will be distracted by
              the readable content of a page when looking a <br /> layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to <br /> using Content here,
              content here, making it look like readable English.
            </p>
            <p className={styles.figureInfo}>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, <br /> and auncover many
              web sites still in their infancy. Various versions have evolved
              over the years
            </p>
          </div>
        </div>
      </figure>
    </div>
  );
};

export default page;
