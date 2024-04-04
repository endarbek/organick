import Image from "next/image";
import styles from "./styles.module.css"
import { transform } from "next/dist/build/swc";
const page = () => {
  return <div>Blog
    <h1 className={styles.blog}>Recent News</h1>
    <div>

      <div className={styles.content} >


        <div className={styles.wrap} >
          <Image className={styles.image} src="/img/Gras.jpg" alt="Gras" width={677} height={424} />
          <div className={styles.cardblock}>


            <div className={styles.cardlog}>

            <h4 className={styles.userTopText} >
              <Image className={styles.vectorImage} src="/img/Vector.svg" alt="vector" width={18} height={20} />
              By Rachi Card
            </h4>

            <h3 className={styles.topTextBold}>The Benefits of Vitamin D & How to Get It</h3>
            <p className={styles.contentText}>Simply dummy text of the printing and typesetting <br />industry. Lorem Ipsum</p>
      
            <a className={styles.card} href="#">Read More <button className={styles.btnCardb}  > <Image className={styles.vectorImage} src="/img/Aerrow.png" alt="vector" width={19} height={19} /></button> </a>


          </div>

          </div>

        </div>


        <div className={styles.wrap}>
          <Image className={styles.image} src="/img/Potato.jpg" alt="Potato" width={677} height={424} />
          <div className={styles.cardblock}></div>
        </div>

        {/* <Image className={styles.text} src="/img/Date.png" alt="Date" width={82} height={82} /> */}
      </div>
    </div>
  </div >
};

export default page;
