import styles from "./Examspage.module.css";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import Exams from "../components/Exams";
import React from "react";

function Adminpage() {
  return (
    <div>
      {/* <Topnav /> */}
      <div className={styles.allcourses}>
        <Sidebar />
        <Exams />
      </div>
    </div>
  );
}

export default Adminpage;
