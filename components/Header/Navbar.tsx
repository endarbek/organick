import Navigation from "./Navigatio";
import Logo from "./Logo";
import styles from "./style.module.css";
import Search from "./Search";

const Navbar = () => {
  return (
    <div className={styles.header}>
      <div className={styles.navlog}>
        <Logo />
        <Navigation />
      </div>
      <Search />
    </div>
  );
};

export default Navbar;
