import React from "react";
import styles from "./Viewcourses.module.css";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import Courses from "../components/Courses";

function Viewcourses() {
  return (
    <div>
      {/* <Topnav /> */}
      <div className={styles.allcourses}>
        <Sidebar />
        <Courses />
      </div>
    </div>
  );
}

export default Viewcourses;
