import React from "react";
import styles from "./Index.module.scss";

const Title = () => {
  return (
    <div className={styles.headContainer}>
      <label className={styles.title}>Rehash Code Challenge</label>
      <label className={styles.nameLabel}>your name</label>
    </div>
  );
};
export default Title;
