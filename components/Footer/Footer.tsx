import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../Header/Logo";
import {
  faInstagram,
  faFacebook,
  faPinterest,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import styles from "./style.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.contact}>
          <h1 className={styles.contact__h1}>Contact Us</h1>
          <div className={styles.contact__div}>
            <h4 className={styles.contact__h4}>Email</h4>
            <h5 className={styles.contact__h5}>endarashiraliev@gmail.com</h5>
          </div>
          <div className={styles.contact__div}>
            <h4 className={styles.contact__h4}>Phone</h4>
            <h5 className={styles.contact__h5}>666 888 888</h5>
          </div>
          <div className={styles.contact__div}>
            <h4 className={styles.contact__h4}>Addres</h4>
            <h5 className={styles.contact__h5}>88 road, borklyn street, USA</h5>
          </div>
        </div>
        <div className={styles.abouts}>
          <div className={styles.about}>
            <Logo />
            <p className={styles.about__p}>
              Simply dummy text of the printing and typesetting industry. Lorem
              Ipsum simply dummy text of the printing
            </p>
            <div className={styles.about__links}>
              <FontAwesomeIcon
                className={styles.about__link}
                icon={faInstagram}
              />
              <FontAwesomeIcon
                className={styles.about__link}
                icon={faFacebook}
              />
              <FontAwesomeIcon
                className={styles.about__link}
                icon={faTwitter}
              />
              <FontAwesomeIcon
                className={styles.about__link}
                icon={faPinterest}
              />
            </div>
          </div>
        </div>
        <div className={styles.pages}>
          <h1 className={styles.pages__h1}>Utily Pages</h1>
          <Link className={styles.pages__links} href="#">
            Style Guide
          </Link>
          <Link className={styles.pages__links} href="not-found">
            404
          </Link>
          <Link className={styles.pages__links} href="protect">
            Password Protected
          </Link>
          <Link className={styles.pages__links} href="licenses">
            Licences
          </Link>
          <Link className={styles.pages__links} href="#">
            Changelog
          </Link>
        </div>
      </div>
      <hr className={styles.footer__line} />
      <div className={styles.parap}>
        Copyright © <span className={styles.organick}>Organick</span> | Designed
        by <span className={styles.organick}>VictorFlow</span> Templates -
        Powered by <span className={styles.organick}>Webflow</span>
      </div>
    </div>
  );
};

export default Footer;
