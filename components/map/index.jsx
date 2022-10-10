import Link from "next/link";
import styles from "./map.module.scss";
import { FiChevronRight } from "react-icons/fi";

function Map(props) {
  let { to, text, number = 2 } = props;
  if (number == 2) {
    return (
      <div className={styles.map}>
        <div className={styles.container}>
          <div className={styles.mapside}>
            <Link href={"/"}>Главная страница</Link>
            <FiChevronRight className={styles.icon} />
            <Link href={`/${to}`}>{text}</Link>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={styles.map}>
        <div className={styles.container}>
          <div className={styles.mapside}>
            <Link href={"/"}>Главная страница</Link>
            <FiChevronRight className={styles.icon} />
            <Link href={"/portfolio"}>Портфолио</Link>
            <FiChevronRight className={styles.icon} />
            <Link href={`/${to}`}>{text}</Link>
          </div>
        </div>
      </div>
    );
  }
}
export default Map;
