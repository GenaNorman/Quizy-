import React from "react";
import styles from "./Topnav.module.css";
// import Sidebar from "./Sidebar";

function Topnav() {
  return (
    <>
      <div className={styles.topnav}>
        <div className={styles.leftnav}>
          <p className={styles.hambuger}>&#8801;</p>
          <p className={styles.logo}>QUIZY</p>
        </div>
        <div className={styles.rightnav}>
          <div className={styles.search}>
            <input className={styles.find} placeholder="Search paper" />
          </div>
          <div className={styles.student}>
            <p className={styles.notify}>&#128365;</p>
            <p>Norman</p>
            <img
              src="../../public/images/norman.jpg"
              alt="norman"
              className={styles.user}
            />
          </div>
        </div>
      </div>
      {/* <div className={styles.panel}>  */}
      {/* <Sidebar/> */}
      {/* </div> */}
    </>
  );
}

export default Topnav;
