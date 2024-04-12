import React from "react";
import styles from "./style.module.css";

const page = () => {
  return (
    <div>
      <aside className={styles.aside}>
        <h1 className={styles.asideTitle}>Licenses</h1>
      </aside>
      <main className={styles.main}>
        <div className={styles.mainCon}>
          <div className={styles.mainConTop}>
            <h1 className={styles.mainTitileTop}>Icon & Graphics</h1>
            <div className={styles.mainConText}>
              <p className={styles.mainText}>
                Icons and Graphics are manually designed by the VictorFlow
                Templates team. You may download <br /> these and edit them to
                fit your website without asking for permission or providing
                credit.
              </p>
              <p className={styles.mainText}>
                Upon purchasing Software UI Kit Template our team grants you a
                nonexclusive, worldwide <br /> copyright license to download,
                copy, modify, and use the icons.
              </p>
            </div>
          </div>
          <div className={styles.mainConMid}>
            <h1 className={styles.mainTitleMid}>Photography</h1>
            <div className={styles.mainConText}>
              <p className={styles.mainText}>
                All images used in the Organick Webflow Template are licensed
                for free personal and commercial <br /> use. If you d like to
                use any specific image, you can check the licenses and download
                the images for <br /> free on Unsplash, Pexels‍. And Freepik.
              </p>
              <h1 className={styles.mainTitleMid}>Unsplash</h1>
              <p className={styles.mainText}>
                Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                Image 8, Image 9, Image 10, Image <br /> 11, Image 12, Image 13,
                Image 14, Image 15, Image 16, Image 17, Image 18, Image 19,
                Image 20, <br />
                Image 21, Image 22, Image 23, Image 24, Image 25,
              </p>
              <h1 className={styles.mainTitleMid}>Pixcel</h1>
              <p className={styles.mainText}>
                Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7,
                Image 8, Image 9, Image 10, Image <br /> 11, Image 12, Image 13,
                Image 14, Image 15, Image 16, Image 17,
              </p>
            </div>
          </div>
          <div className={styles.mainConBottom}>
            <h1 className={styles.mainTitleBottom}>Font</h1>
            <div className={styles.mainConText}>
              <p className={styles.mainText}>
                Organick template uses free licensed Google Fonts. Please check
                Roboto, Yellowtail <br /> and Open Sans.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
