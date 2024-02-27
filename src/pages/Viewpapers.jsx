import React from "react";
import styles from "./Viewpapers.module.css";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import Department from "../components/Department";

function Viewpapers() {
  return (
    <div>
      {/* <Topnav /> */}
      <div className={styles.allcourses}>
        <Sidebar />
        <Department />
      </div>
    </div>
  );
}

export default Viewpapers;
