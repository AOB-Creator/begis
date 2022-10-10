import styles from "./main.module.scss";

function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <div className={styles.mainpage}>
          <div className={styles.texttop}>
            Привет, меня зовут Бегис. Занимаюсь{" "}
            <span>графическом и UX/UI дизайном</span>
          </div>
          <div className={styles.textmid}>
            Работаю в этой сфере более 3-х лет, работал в маркетинговом
            агентстве и веб-студии. Есть опыт в веб-разработке
          </div>
          <button>Обо мне 🎯</button>
        </div>
      </div>
    </div>
  );
}
export default Main;
