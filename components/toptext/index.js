import styles from "./toptext.module.scss";
function TopText(props) {
  let { text, title } = props;
  return (
    <div className={styles.top}>
      <div className={styles.container}>
        <div className={styles.textpart}>
          <h1>{title}</h1>
          <p>{text}</p>
        </div>
      </div>
    </div>
  );
}
export default TopText;
