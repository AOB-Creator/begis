import Link from "next/link";
import styles from "./navbar.module.scss";
import { GrMenu } from "react-icons/gr";
import { useRef, useState } from "react";

export default function Navbar() {
  let [open, setopen] = useState(false);
  // let path = window.location.pathname.slice(1, window.location.pathname.length);
  let [text, settext] = useState("no");

  return (
    <>
      <div className={styles.navbar}>
        <div className={styles.container}>
          <div className={styles.navpage}>
            <div className={styles.logo}>
              <Link href={"/"}>
                <a className={styles.navtext1}>Begis</a>
              </Link>
              <Link href={"/"}>
                <a className={styles.navtext2}>Orinbaev</a>
              </Link>
            </div>
            <div
              className={styles.menuicons}
              onClick={() => {
                setopen(!open);
              }}
            >
              <GrMenu />
            </div>
            <ul
              className={
                open ? `${styles.menus}` : `${styles.menus} ${styles.active}`
              }
            >
              <li
                className={
                  text == "portfolio" ? `${styles.active}` : `${styles.nothing}`
                }
                onClick={() => {
                  settext("portfolio");
                  setopen(!open);
                }}
              >
                <Link href={"/portfolio"}>Портфолио</Link>
              </li>
              <li
                className={
                  text == "about" ? `${styles.active}` : `${styles.nothing}`
                }
                onClick={() => {
                  settext("about");
                  setopen(!open);
                }}
              >
                <Link href={"/about"}>Обо мне</Link>
              </li>
              <li
                className={
                  text == "contact" ? `${styles.active}` : `${styles.nothing}`
                }
                onClick={() => {
                  settext("contact");
                  setopen(!open);
                }}
              >
                <Link href={"/contact"}>Контакты</Link>
              </li>
              <div className={styles.socials}>
                <Link href={"/contact"}>LinkedIn</Link>
                <Link href={"/contact"}>Behance</Link>
                <Link href={"/contact"}>Instagram</Link>
              </div>
            </ul>
            <Link href={"mailto:hi@begis.uz"}>
              <a className={styles.email}>hi@begis.uz</a>
            </Link>
          </div>
        </div>
      </div>
      <div className={styles.block}></div>
    </>
  );
}
