import Link from "next/link";
import styles from "./navbar.module.scss";
import { GrMenu } from "react-icons/gr";

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <div className={styles.container}>
        <div className={styles.navpage}>
          <div className={styles.logo}>
            <Link href={"/"}>Begis</Link>
          </div>
          <div className={styles.menuicons}>
            <GrMenu />
          </div>
          <ul className={styles.menus}>
            <li>
              <Link href={"/portfolio"}>Портфолио</Link>
            </li>
            <li>
              <Link href={"/about"}>Обо мне</Link>
            </li>
            <li>
              <Link href={"/contact"}>Контакты</Link>
            </li>
          </ul>
          <Link className="email" href={"mailto:hi@begis.uz"}>
            hi@begis.uz
          </Link>
        </div>
      </div>
    </div>
  );
}
