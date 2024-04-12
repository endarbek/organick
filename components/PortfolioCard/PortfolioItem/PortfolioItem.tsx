import Button from "@/components/shared/UI/Button/Button";
import style from ".//style.module.css";
import Image from "next/image";
import Link from "next/link";
import { IOrganic } from "@/types/organic";

interface Props {
  organic: IOrganic;
}
export default function PortfolioItem({ organic }: Props) {
  return (
    <>
      <div className={style.container}>
        {organic.image && (
          <Image
            className={style.wrap}
            src={`/img/${organic.image.name}`}
            alt=""
            width={1920}
            height={870}
          />
        )}
        <div className={style.card}>
          <div className={style.info}>
            <h2 className={style.title}>{organic.title}</h2>
            <p className={style.category}>{organic.name}
              To live a better, healthier, and wholesome 
              <br></br>life by providing them
              with 100% certifiedauthentic organic food. <br></br>
              Farming is carried out without the use of any chemicals like<br></br>
              pesticides or fertilizers or any growth Harmon.
            </p>
          </div>
          <ul className={style.placesOrder}>
            <li className={style.list}>
              <h5 className={style.name}>Date:</h5>February 14, 2022
            </li>
            <li className={style.list}>
              <h5 className={style.name}>Client:</h5>
              Martin Devan
            </li>
            <li className={style.list}>
              <h5 className={style.name}>Category:</h5>Fruits
            </li>
            <li className={style.list}>
              <h5 className={style.name}>Service:</h5>Organic Farming
            </li>
          </ul>
        </div>
      </div>
      <div className={style.block}>
        <h1 className={style.text}>About The Farm:</h1>
        <p className={style.wrapper_p}>
          Uniquely matrix economically sound value through cooperative
          technology.<br></br>
          Competently parallel task fully researched data and enterprise process
          improvements. <br></br>
          Collaboratively expedite quality manufactured products via
          client-focused results quickly<br></br>
          communicate enabled technology and turnkey leadership skills.<br></br>
          Uniquely enable accurate supply chains rather than friction
          technology.<br></br>
          <br></br> Podcasting operational change management inside of workflows
          to establish a framework.<br></br>
          Taking seamless key performance indicators offline to maximize the
          long tail.<br></br>
          Keeping your eye on the ball while performing a deep dive on the
          start-up mentality to derive convergence on cross-platform
          integration.
        </p>
        <Image
          className={style.img}
          src="/img/Photo2.jpg"
          alt=""
          width={964}
          height={642}
        />
        <h3 className={style.tema}>The Organic Products</h3>
        <h1 className={style.text}>How To Farm:</h1>
        <p className={style.wrapper_p}>
          Collaboratively administrate empowered markets via plug-and-play
          networks. Dynamically procrastinate B2C users after installed base
          benefits. Dramatically visualize customer directed convergence without
          revolutionary ROI. Objectively innovate empowered manufactured
          products whereas parallel platforms. Holistically predominate
          extensible testing procedures for reliable supply chains. Dramatically
          engage top-line web services vis-à-vis cutting-edge deliverables.
          Uniquely matrix economically sound value through cooperative
          technology. Competently parallel task fully researched data and
          enterprise process improvements. Collaboratively expedite quality
          manufactured products via client-focused results quickly communicate
          enabled technology and turnkey leadership skills. Uniquely enable
          accurate supply chains rather than friction technology.
        </p>
        <h1 className={style.text}>Conclusion:</h1>
        <p className={style.wrapper_p}>
          We make our products to reach a lot with marketing techniques. If you
          are not comfortable going to the nearby market place we also will
          deliver your product to your doorstep. The Product that you ordered
          will be verified that we have or not if have we will start to move on
          with the next step or else we will ask our farmers for the supply.
          Once your product is packed it will be delivered to your nearby
          locality you can directly visit the to buy the product.
        </p>
      </div>
    </>
  );
}