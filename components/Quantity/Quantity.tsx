import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./style.module.css";

interface Props {
  number: number;
  add: () => void;
  remove: () => void;
}
export default function Quantity({ number, add, remove }: Props) {
  return (
    <div className={styles.container}>
      <span className={styles.number}>{number}</span>
      <div className={styles.buttons}>
        <button className={styles.button} onClick={add}>
          <FontAwesomeIcon icon={faChevronUp} className={styles.chevron} />
        </button>
        <button className={styles.button} onClick={remove}>
          <FontAwesomeIcon icon={faChevronDown} className={styles.chevron} />
        </button>
      </div>
    </div>
  );
}
