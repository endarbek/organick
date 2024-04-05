"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { ISliders } from "@/types/slider";
import styles from "./style.module.css";
import Image from "next/image";
import "../../../app/globals.css";
interface SLiderProps {
  slide: ISliders[];
}

export default function SLide({ slide }: SLiderProps) {
  return (
    <>
      <Swiper
        pagination={{
          enabled: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {slide.map((slide) => (
          <SwiperSlide className={styles.slide} key={slide.id}>
            <Image
              className={styles.slide__image}
              src={`/img/${slide.image.name}`}
              alt={slide.image.name}
              width={115}
              height={115}
            />
            <div className={styles.description}>
              <Image src="/img/star.png" alt="star" width={122} height={26} />
              <p className={styles.description__p}>{slide.description}</p>
            </div>
            <div className={styles.name}>
              <div className={styles.author}>
                <h2 className={styles.author__h2}>{slide.author}</h2>
                <h4 className={styles.author__h4}>{slide.consumer}</h4>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
// {
//           enabled: true,
//           bulletClass: styles.bullet,
//         }
