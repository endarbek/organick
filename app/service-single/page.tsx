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
          <div className={styles.container}>
            <div className={styles.figureInfoTitleCon}>
              <h1 className={styles.figureTitle}>Organic Store Services</h1>
              <p className={styles.figureInfo}>
                t is a long established fact that a reader will be distracted by
                the readable content of a page when looking a layout. The point
                of using Lorem Ipsum is that it has a more-or-less normal
                distribution of letters, as opposed to using Content here,
                content here, making it look like readable English.
              </p>
              <p className={styles.figureInfo}>
                Many desktop publishing packages and web page editors now use
                Lorem Ipsum as their default model text, and auncover many web
                sites still in their infancy. Various versions have evolved over
                the years
              </p>
            </div>
          </div>
          <div className={styles.figureImageInfoCon}>
            <div className={styles.figureImage}>
              <Image
                className={styles.figureJpg}
                src="/FigureImage.jpg"
                alt=""
                width={338}
                height={224}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
            <div className={styles.figgureImageInfo}>
              <h1 className={styles.figureImageTitle}>Why Organic</h1>
              <p className={styles.figureImageText}>
                Sed ut perspiciatis unde omnis iste natus error sit <br />{" "}
                voluptat. page editors now use Lorem Ipsum as their <br />{" "}
                default model text, and auncover.
              </p>
            </div>
          </div>
          <div className={styles.figureImageInfoCon}>
            <div className={styles.figgureImageInfo}>
              <h1 className={styles.figureImageTitle}>Speciality Produce</h1>
              <p className={styles.figureImageText}>
                Sed ut perspiciatis unde omnis iste natus error sit <br />{" "}
                voluptat. page editors now use Lorem Ipsum as their <br />{" "}
                default model text, and auncover.
              </p>
            </div>
            <div className={styles.figureImage}>
              <Image
                className={styles.figureJpg}
                src="/FigureImage2.jpg"
                alt=""
                width={338}
                height={224}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
      </figure>
      <aside className={styles.aside}>
        <div className={styles.asideTitleCon}>
          <h1 className={styles.asideTitle}>We farm your land</h1>
          <p className={styles.asideText}>
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking a <br /> layout. The
            point of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to <br /> using Content here,
            content here, making it look like readable English.
          </p>
        </div>
        <div className={styles.asideButtonCon}>
          <div className={styles.asideBtn1}>
            <div className={styles.asideBtnNumber1}>
              <h1 className={styles.number}>01</h1>
            </div>
            <h1 className={styles.asideTitels}>Best quality support</h1>
          </div>
          <div className={styles.asideBtn2}>
            <div className={styles.asideBtnNumber2}>
              <h1 className={styles.number}>02</h1>
            </div>
            <h1 className={styles.asideTitels}>Money back guarantee</h1>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default page;
