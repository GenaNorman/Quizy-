import React from "react";
import styles from "./Courses.module.css";

function Courses() {
  return (
    <div className={styles.coursedetails}>
      <div className={styles.direction}>
        <h4>Home/Courses</h4>
      </div>
      <div className={styles.coursetable}>
        <div className={styles.heading}>
          <span className={styles.tabletopics}>My Course</span>
          <div>
            <span>Sort By</span>
            <span className={styles.dropdown}>&rsaquo;</span>
          </div>
        </div>
        <div className={styles.coursetablecontent}>
          <div className={styles.content}>
            {/* <div className={styles.couseimage}></div> */}
            <p className={styles.title}>System Analysis</p>
            <p className={styles.papers}>25 papers</p>
            {/* <input type="range" /> */}
            <a href="sidflis" className={styles.viewcourse}>
              Continue
              <span>&rarr;</span>
            </a>
          </div>
          <div className={styles.content}>
            {/* <div className={styles.couseimage}></div> */}
            <p className={styles.title}>Cyber Security</p>
            <p className={styles.papers}>25 papers</p>
            {/* <input type="range" /> */}
            <a href="sidflis" className={styles.viewcourse}>
              Continue
              <span>&rarr;</span>
            </a>
          </div>
          <div className={styles.content}>
            {/* <div className={styles.couseimage}></div> */}
            <p className={styles.title}>Algorith and data structure</p>
            <p className={styles.papers}>25 papers</p>
            {/* <input type="range" /> */}
            <a href="sidflis" className={styles.viewcourse}>
              Continue
              <span>&rarr;</span>
            </a>
          </div>
          <div className={styles.content}>
            {/* <div className={styles.couseimage}></div> */}
            <p className={styles.title}>English Language</p>
            <p className={styles.papers}>25 papers</p>
            {/* <input type="range" /> */}
            <a href="sidflis" className={styles.viewcourse}>
              Continue
              <span>&rarr;</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
