import Link from "next/link";
import styles from "./footer.module.scss";

function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footpage}>
          <div className={styles.leftfoot}>
            <div>© Бегис Орынбаев</div>
            <div className={styles.socials}>
              <Link href={""}>Telegram</Link>
              <Link href={""}>LinkedIn</Link>
              <Link href={""}>Instagram</Link>
            </div>
          </div>
          <div className={styles.rightfoot}>
            <Link href={"/"}>Портфолио</Link>
            <Link href={"/"}>Обо мне</Link>
            <Link href={"/"}>Контакты</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
