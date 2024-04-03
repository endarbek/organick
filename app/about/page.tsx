import Image from "next/image";
import React from "react";
import styles from "./style.module.css";
import Button from "@/components/shared/UI/Button/Button";
import Link from "next/link";
const page = () => {
  return (
    <div>
      <h1 className={styles.con}>About Us</h1>
      <figure className={styles.figure}>
        <div className={styles.image}>
          <Image
            src="/Image.png"
            alt=""
            width={600}
            height={600}
            sizes="100vw"
            // Make the image display full width
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title1}>About Us</h3>
          <h1 className={styles.title2}>
            We do Creative <br /> Things for Success
          </h1>
          <p className={styles.info1}>
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry s standard dummy text ever since the
            1500s, when an unknown printer took a galley. Simply dummy text of
            the printing and typesetting industry. Lorem had ceased to been the
            industry s standard dummy text ever since the 1500s, when an unknown
            printer took a galley.
          </p>
          <div className={styles.icon}>
            <Image src="/Tractor.png" alt="" width={46} height={46} />
            <h3 className={styles.info2}>
              Modern Agriculture <br /> Equipment
            </h3>
            <Image src="/Chemical Plant.png" alt="" width={46} height={46} />
            <h3 className={styles.info2}>
              No growth <br /> hormones are used
            </h3>
          </div>
          <Link href="service" className={styles.link}>
            <Button background={"blue"}>Explore more</Button>
          </Link>
        </div>
      </figure>
      <section className={styles.section}>
        <div className={styles.sectionTop}>
          <div className={styles.sectiomConTop}>
            <div className={styles.sectionInfo}>
              <h2 className={styles.title1}>Why Choose us?</h2>
              <h1 className={styles.sectionTitle2}>
                We do not buy from the open market & traders.
              </h1>
              <p className={styles.sectionText}>
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry s standard the 1500s, when
                an unknown
              </p>
              <nav className={styles.navIcon}>
                <Image
                  className={styles.navIcon1}
                  src="Ellipse 80.svg"
                  alt=""
                  width={11}
                  height={11}
                />
                <h3 className={styles.navTitle}>100% Natural Product</h3>
              </nav>
              <p className={styles.navText}>
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
              <nav className={styles.navIcon}>
                <Image
                  className={styles.navIcon1}
                  src="Ellipse 80.svg"
                  alt=""
                  width={11}
                  height={11}
                />
                <h3 className={styles.navTitle}> Increases resistance</h3>
              </nav>
              <p className={styles.navText}>
                Simply dummy text of the printing and typesetting industry Lorem
                Ipsum
              </p>
            </div>
            <div className={styles.navImage}>
              <Image
                className={styles.navCardina}
                src="/Photo1.jpg"
                alt=""
                width={600}
                height={690}
                sizes="100vw"
                // Make the image display full width
                style={{
                  width: "100%",
                  height: "auto",
                }}
              />
            </div>
          </div>
        </div>
        <div className={styles.conSection}>
          <div className={styles.iconCard}>
            <Image
              src="Icon.svg"
              alt=""
              width={95}
              height={95}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <h2 className={styles.sectionTitle}>Return Policy</h2>
            <p className={styles.infoSection}>
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className={styles.iconCard}>
            <Image
              src="Icon2.svg"
              alt=""
              width={95}
              height={95}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <h2 className={styles.sectionTitle}>100% Fresh</h2>
            <p className={styles.infoSection}>
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className={styles.iconCard}>
            <Image
              src="Icon3.svg"
              alt=""
              width={95}
              height={95}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <h2 className={styles.sectionTitle}>Support 24/7</h2>
            <p className={styles.infoSection}>
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
          <div className={styles.iconCard}>
            <Image
              src="Icon4.svg"
              alt=""
              width={95}
              height={95}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <h2 className={styles.sectionTitle}>Secured Payment</h2>
            <p className={styles.infoSection}>
              Simply dummy text of the printintypesetting industry.
            </p>
          </div>
        </div>
      </section>
      <main className={styles.main}>
        <div className={styles.mainCon}>
          <div className={styles.mainInfo}>
            <h1 className={styles.mainTitle}>Team</h1>
            <h1 className={styles.mainTitle2}>Our Organic Experts</h1>
            <p className={styles.mainText}>
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry s standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
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
        </div>
      </main>
      <aside className={styles.aside}>
        <h2 className={styles.asideText}>The Products</h2>
        <h1 className={styles.asideText2}>We Offer Organic For You</h1>
        <div className={styles.asideImage}>
          <div className={styles.asideImage1}>
            <Image
              className={styles.asideImages}
              src="/Spicy.jpg"
              alt=""
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <h2 className={styles.asideImageTitle}>Spicy</h2>
          </div>
          <div className={styles.asideImage2}>
            <Image
              className={styles.asideImages}
              src="/Nuts.jpg"
              alt=""
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <h2 className={styles.asideImageTitle}>Nuts & Feeds</h2>
          </div>
          <div className={styles.asideImage3}>
            <Image
              className={styles.asideImages}
              src="/Froots.jpg"
              alt=""
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <h2 className={styles.asideImageTitle}>Fruits</h2>
          </div>
          <div className={styles.asideImage4}>
            <Image
              className={styles.asideImages}
              src="/Vegetable.jpg"
              alt=""
              width={300}
              height={300}
              style={{
                width: "100%",
                height: "auto",
              }}
            />
            <h2 className={styles.asideImageTitle}>Vegetables</h2>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default page;
