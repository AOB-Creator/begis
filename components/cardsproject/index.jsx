import styles from "./project.module.scss";

function Cardsproject(props) {
  let {
    data: { img, imgs },
  } = props;

  return (
    <div className={styles.div}>
      <div className={styles.container}>
        <div className={styles.cards}>
          {imgs.map((item, index) => {
            return (
              <div className={styles.card} key={index}>
                <img src={`../${item}`} alt="" />
              </div>
            );
          })}
        </div>
        ;
      </div>
      ;
    </div>
  );
}
export default Cardsproject;
