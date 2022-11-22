import styles from "./Overview.module.css";

const Overview = () => {
  return (
    <div className={styles.overview}>
      <h2>Synopsis</h2>
      <div className={styles.border}></div>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </p>
      <h2>More Info</h2>
      <div className={styles.border}></div>
      <div className={styles.more_info}>
        <h5>
          Relase Date : <span>January 5, 1998</span>
        </h5>
        <h5>
          Director : <span>January 5, 1998</span>
        </h5>
        <h5>
          Featured song : <span>January 5, 1998</span>
        </h5>
        <h5>
          Budget : <span>January 5, 1998</span>
        </h5>
        <h5>
          Relase Date : <span>January 5, 1998</span>
        </h5>
        <h5>
          Director : <span>January 5, 1998</span>
        </h5>
        <h5>
          Featured song : <span>January 5, 1998</span>
        </h5>
        <h5>
          Budget : <span>January 5, 1998</span>
        </h5>
      </div>
    </div>
  );
};

export default Overview;
