import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";

const page = () => {
  return (
    <div>
      <aside className={styles.aside}>
        <h1>Protected Page</h1>
      </aside>
      <section className={styles.section}>
        <div className={styles.sectionContainer}>
          <div className={styles.sectionCon}>
            <Image
              className={styles.image}
              src="/PosswordImage.svg"
              alt=""
              width={193}
              height={281}
            />
            <div className={styles.sectionConText}>
              <p className={styles.sectionText}>Password</p>
              <form className={styles.form}>
                <input
                  className={styles.input}
                  type="password"
                  placeholder="Enter Your Password"
                />
              </form>
              <Link href="404" className={styles.link}>
                <button className={styles.button}>
                  Send Now{" "}
                  <Image src="/Faer.svg" alt="" width={19} height={19} />{" "}
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
