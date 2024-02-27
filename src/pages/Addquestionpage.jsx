import React from "react";
import styles from "./Addquestionpage.module.css";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import Addquestion from "../components/Addquestion";

function Addquestionpage() {
  return (
    <div>
      {/* <Topnav /> */}
      <div className={styles.allcourses}>
        <Sidebar />
        <Addquestion />
      </div>
    </div>
  );
}

export default Addquestionpage;
