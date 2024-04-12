import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <figure className={styles.figure}>
        <h1 className={styles.figureTitle}>Our Team</h1>
      </figure>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.mainInfo}>
            <h1 className={styles.mainTitle1}>Team</h1>
            <h1 className={styles.mainTitle2}>Our Organic Experts</h1>
            <p className={styles.mainText}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry <br /> s standard dummy text ever
              since the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className={styles.mainCards}>
            <div className={styles.mainCard1}>
              <Image
                className={styles.mainCartina}
                src="/Men.jpg"
                alt=""
                width={400}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div className={styles.mainCardInfo}>
                <div className={styles.mainConInfo}>
                  <h2 className={styles.mainName}>Giovani Bacardo</h2>
                  <div className={styles.mainSocialnetwork}>
                    <h2 className={styles.mainWork}>Farmer</h2>
                    <Link href="https://www.facebook.com/">
                      <Image src="Fb.svg" alt="" width={20} height={20} />
                    </Link>
                    <Link href="https://twitter.com/">
                      <Image src="Twiter.svg" alt="" width={20} height={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainCard2}>
              <Image
                className={styles.mainCartina}
                src="/Girl1.jpg"
                alt=""
                width={400}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div className={styles.mainCardInfo}>
                <div className={styles.mainConInfo}>
                  <h2 className={styles.mainName}>Marianne Loreno</h2>
                  <div className={styles.mainSocialnetwork}>
                    <h2 className={styles.mainWork}>Designer</h2>
                    <Link href="https://www.instagram.com/">
                      <Image src="Insta.svg" alt="" width={20} height={20} />
                    </Link>
                    <Link href="https://www.facebook.com/">
                      <Image src="Fb.svg" alt="" width={20} height={20} />
                    </Link>
                    <Link href="https://twitter.com/">
                      <Image src="Twiter.svg" alt="" width={20} height={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainCard3}>
              <Image
                className={styles.mainCartina}
                src="/Girl2.jpg"
                alt=""
                width={400}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div className={styles.mainCardInfo}>
                <div className={styles.mainConInfo}>
                  <h2 className={styles.mainName}>Riga Pelore</h2>
                  <div className={styles.mainSocialnetwork}>
                    <h2 className={styles.mainWork}>Farmer</h2>
                    <Link href="https://www.instagram.com/">
                      <Image src="Insta.svg" alt="" width={20} height={20} />
                    </Link>
                    <Link href="https://www.facebook.com/">
                      <Image src="Fb.svg" alt="" width={20} height={20} />
                    </Link>
                    <Link href="https://twitter.com/">
                      <Image src="Twiter.svg" alt="" width={20} height={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.mainCards}>
            <div className={styles.mainCard1}>
              <Image
                className={styles.mainCartina}
                src="/Girl3.jpg"
                alt=""
                width={400}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div className={styles.mainCardInfo}>
                <div className={styles.mainConInfo}>
                  <h2 className={styles.mainName}>Keira Knightley</h2>
                  <div className={styles.mainSocialnetwork}>
                    <h2 className={styles.mainWork}>Farmer</h2>
                    <Link href="https://www.facebook.com/">
                      <Image src="Fb.svg" alt="" width={20} height={20} />
                    </Link>
                    <Link href="https://twitter.com/">
                      <Image src="Twiter.svg" alt="" width={20} height={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainCard2}>
              <Image
                className={styles.mainCartina}
                src="/Men2.jpg"
                alt=""
                width={400}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div className={styles.mainCardInfo}>
                <div className={styles.mainConInfo}>
                  <h2 className={styles.mainName}>Scott Lawrence</h2>
                  <div className={styles.mainSocialnetwork}>
                    <h2 className={styles.mainWork}>Designer</h2>
                    <Link href="https://www.instagram.com/">
                      <Image src="Insta.svg" alt="" width={20} height={20} />
                    </Link>
                    <Link href="https://www.facebook.com/">
                      <Image src="Fb.svg" alt="" width={20} height={20} />
                    </Link>
                    <Link href="https://twitter.com/">
                      <Image src="Twiter.svg" alt="" width={20} height={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.mainCard3}>
              <Image
                className={styles.mainCartina}
                src="/Girl4.jpg"
                alt=""
                width={400}
                height={450}
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
              <div className={styles.mainCardInfo}>
                <div className={styles.mainConInfo}>
                  <h2 className={styles.mainName}>Karen Allen</h2>
                  <div className={styles.mainSocialnetwork}>
                    <h2 className={styles.mainWork}>Farmer</h2>
                    <Link href="https://www.instagram.com/">
                      <Image src="Insta.svg" alt="" width={20} height={20} />
                    </Link>
                    <Link href="https://www.facebook.com/">
                      <Image src="Fb.svg" alt="" width={20} height={20} />
                    </Link>
                    <Link href="https://twitter.com/">
                      <Image src="Twiter.svg" alt="" width={20} height={20} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default page;
