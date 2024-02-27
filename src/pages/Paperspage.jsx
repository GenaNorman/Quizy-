import styles from "./Paperspage.module.css";
import Sidebar from "../components/Sidebar";
import Topnav from "../components/Topnav";
import Papers from "../components/Papers";

function Paperspage() {
  return (
    <div>
      {/* <Topnav /> */}
      <div className={styles.allcourses}>
        <Sidebar />
        <Papers />
      </div>
    </div>
  );
}

export default Paperspage;
