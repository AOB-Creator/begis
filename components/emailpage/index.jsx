import Link from "next/link";
import styles from "./email.module.scss";

function EmailPage() {
  return (
    <div className={styles.email}>
      <div className={styles.container}>
        <div className={styles.text}>Контакты</div>
        <div className={styles.contacts}>
          <div className={styles.left}>
            <div className={styles.linkpage}>
              <div>E-mail:</div>
              <Link href={"mailto:hi@begis.uz"}>hi@begis.uz</Link>
            </div>
            <div className={styles.linkpage}>
              <div>Telegram:</div>
              <Link href={"https//t.m/@begys"}>@begys</Link>
            </div>
            <div className={styles.linkpage}>
              <div>Телефон:</div>
              <Link href={"tel:+998913042528"}>+998913042528</Link>
            </div>
          </div>
          <div className={styles.right}>
            <Link href={"/"}>Behance</Link>
            <Link href={"/"}>Instagram</Link>
            <Link href={"/"}>Facebook</Link>
            <Link href={"/"}>LinkedIn</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default EmailPage;
