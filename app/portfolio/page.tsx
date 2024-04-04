import React from "react";
import Button from "@/components/shared/UI/Button/Button";
import styles from "../portfolio/style.module.css";
import Image from "next/image";
import Link from "next/link";
import PortfolioCard from "@/components/PortfolioCard/PortfolioCard";

const data = [
  {
    id: 1,
    image: "/img/Image.png",
    title: "Green & Tasty Lemon",
    category: "Fruits",
  },
  {
    id: 2,
    image: "/img/Image1.png",
    title: "Organic Carrot",
    category: "Farmer",
  },
  {
    id: 3,
    image: "/img/Image2.png",
    title: "Organic Betel Leaf",
    category: "Leaf ",
  },
  {
    id: 4,
    image: "/img/tomato.png",
    title: "Natural Tommato",
    category: "Fruits",
  },
  {
    id: 5,
    image: "/img/Image5.png",
    title: "Black Raspberry",
    category: "Farmer",
  },
  {
    id: 6,
    image: "/img/Image6.png",
    title: "Honey Orange",
    category: "Farmer",
  },
];

const Portfolio = () => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.portfolioBanner}>Portfolio Standard</h1>
      <div className={styles.portfolio}>
        {data.map((item) => {
          return (
            <div key={item.id} className={styles.card}>
              <div className={styles.imgWrap}>
                <Image
                  className={styles.image}
                  src={item.image}
                  alt=""
                  width={696}
                  height={464}
                />
                <div className={styles.linkWrap}>
                  <Link href={`/portfolio/${item.id}`}>
                    <Image src="/Icon7.png" alt="" width={50} height={50} />
                  </Link>
                </div>
              </div>
              <div className={styles.info}>
                <h4 className={styles.title}>{item.title}</h4>
                <p className={styles.category}>{item.category}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
