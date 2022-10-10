import styles from "./projects.module.scss";

function Projects(props) {
  let { img, descr } = props;
  return (
    <div className={styles.projects}>
      <div className={styles.container}>
        <div className={styles.project}>
          <div className={styles.left}>
            <img src={`../${img}`} alt="" />
          </div>
          <div className={styles.right}>
            <h3>About Project</h3>
            <p>{descr}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
