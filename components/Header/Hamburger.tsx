import styles from "./style.module.css";
import cn from "clsx";
interface IHamburger {
  active: boolean;
  handleClick: () => void;
}
export default function Hamburger({ active, handleClick }: IHamburger) {
  return (
    <button
      className={cn(styles.hamburger, styles.hamburger_spin, {
        [styles.is_active]: active,
      })}
      type="button"
      onClick={handleClick}
    >
      <span className={styles.hamburger_box}>
        <span className={styles.hamburger_inner}></span>
      </span>
    </button>
  );
}
