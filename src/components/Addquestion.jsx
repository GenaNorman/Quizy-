import React from "react";
import styles from "./Addquestion.module.css";

function Addquestion() {
  return (
    <div className={styles.addquestion}>
      <h4>
        Home/papers/<span color={styles.grey}>department</span>
      </h4>
      <span className={styles.tabletopics}>Upload Question papper</span>
      <div className={styles.upload}>
        <span className={styles.info}>Basic information</span>

        <form action="" className={styles.fom}>
          <label htmlFor="" className={styles.name}>
            Course Name
          </label>
          <input type="text" className={styles.papername} />
          <label htmlFor="" className={styles.name}>
            Description
          </label>
          <input type="text" className={styles.papername} />
        </form>

        <br />
        <label htmlFor="" className={styles.nam}>
          Category
        </label>
        <select className={styles.papernam}>
          <option>Software Engineering</option>
          <option>Graphics and web development</option>
          <option>Network and cyber security</option>
          <option>Electrical power system</option>
        </select>
        <input type="file" className={styles.namput} />
        <br />
        <input type="Submit" className={styles.okay} />
      </div>
    </div>
  );
}

export default Addquestion;
