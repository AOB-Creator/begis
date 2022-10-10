import styles from "./cards.module.scss";
import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

function CardsFour() {
  return (
    <div className={styles.cards}>
      <div className={styles.container}>
        <h1 className={styles.texttop}>Избранные работы</h1>
        <div className={styles.cardspart}>
          <div className={styles.card}>
            <div className={styles.cardtop}>
              <div className={styles.left}>
                <div className={styles.text1}>UX/UI Design</div>
                <div className={styles.text2}>Ami app</div>
              </div>
              <div className={styles.right}>
                <BsArrowRight className={styles.icons} />
              </div>
            </div>
            <div className={styles.cardbot}>
              <img src="./img4.png" alt="alpa" />
            </div>
          </div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
          <div className={styles.card}></div>
        </div>
      </div>
    </div>
  );
}
export default CardsFour;
