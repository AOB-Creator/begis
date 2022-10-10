import styles from "./read.module.scss";
import { BsArrowRight } from "react-icons/bs";

function ReadMore(props) {
  let { context } = props;
  return (
    <button className={styles.button1}>
      <span>{context}</span>
      <BsArrowRight className={styles.iconsbtn} />
    </button>
  );
}
export default ReadMore;
