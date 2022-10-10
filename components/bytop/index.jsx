import Link from "next/link";
import styles from "./bytop.module.scss";
import { HiOutlineArrowLeft } from "react-icons/hi";
function Bytop(props) {
  let { to } = props;

  return (
    <div className={styles.bytops}>
      <Link href={`${to}`} className={styles.tothetop}>
        <a>
          <HiOutlineArrowLeft className={styles.toicons} />
          <span>Вверх</span>
        </a>
      </Link>
    </div>
  );
}

export default Bytop;
