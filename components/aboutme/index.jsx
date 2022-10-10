import ReadMore from "../readmore";
import styles from "./about.module.scss";

function Aboutme() {
  return (
    <div className={styles.aboutpage}>
      <div className={styles.container}>
        <div className={styles.about}>
          <div className={styles.aboutleft}>
            <div className={styles.title}>Обо мне</div>
            <p>
              Кстати, элементы политического процесса могут быть своевременно
              верифицированы. Задача организации, в особенности же экономическая
              повестка сегодняшнего дня способствует подготовке и реализации
              системы обучения кадров, соответствующей насущным потребностям.
            </p>
            <p>
              Как уже неоднократно упомянуто, сторонники тоталитаризма в науке,
              инициированные исключительно синтетически, функционально разнесены
              на независимые элементы!
            </p>
            <ReadMore context="Читать полностью" />
          </div>
          <div className={styles.aboutright}>
            <img src="./begis.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Aboutme;
