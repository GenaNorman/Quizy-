import { Link } from "react-router-dom";
import styles from "./Sidebar.module.css";
import { FaUser } from "react-icons/fa6";
import { SiCoursera } from "react-icons/si";
import { PiSignOutBold } from "react-icons/pi";
import { IoMdPaper } from "react-icons/io";

import { MdAssignmentAdd, MdUnsubscribe } from "react-icons/md";
import { useState } from "react";

const Adminaction = [
  {
    id: 1,
    path: "/addquestionpage",
    name: "Dashboard",
    icon: <MdAssignmentAdd />,
  },
  {
    id: 1,
    path: "/addquestionpage",
    name: "Add Question",
    icon: <MdAssignmentAdd />,
  },
  {
    id: 2,
    path: "/addquestionpage",
    name: "Add Department",
    icon: <MdAssignmentAdd />,
  },
];
const Applicationaction = [
  {
    id: 1,
    path: "/course",
    name: "View Course",
    icon: <SiCoursera />,
  },
  {
    id: 2,
    path: "/examspage",
    name: "View Paper",
    icon: <IoMdPaper />,
  },
  {
    id: 4,
    // path: "/",
    name: "Subscription",
    icon: <MdUnsubscribe />,
  },
  {
    id: 5,
    // path: "/",
    name: "Renew Plan",
    icon: <IoMdPaper />,
  },
];
const Accountaction = [
  {
    id: 1,
    // path: "/",
    name: "Profile",
    icon: <FaUser />,
  },
  {
    id: 2,
    // path: "/",
    name: "SignOut",
    icon: <PiSignOutBold />,
  },
];
function Sidebar() {
  const [isopen, setIsOpen] = useState(true);
  return (
    <>
      <div className={styles.panel}>
        <div className={styles.sidebar}>
          <div className={styles.logobox}>
            <img src="../../public/images/favicon.png" alt="Quizy" />
            <span className={styles.logo}>Quizy</span>
          </div>

          {Adminaction.map((action) => (
            <Action action={action} key={action.id} />
          ))}

          {/* <h3>Application</h3> */}

          {Applicationaction.map((appaction) => (
            <Appaction appaction={appaction} key={appaction.id} />
          ))}

          {/* <h3>Account</h3> */}

          {Accountaction.map((accaction) => (
            <Accaction accaction={accaction} key={accaction.id} />
          ))}
        </div>
      </div>
    </>
  );
}
function Action({ action }) {
  return (
    <li className={styles.element}>
      <Link to={action.path}>
        <span>{action.icon}</span>
        <span className={styles.action}>{action.name}</span>
      </Link>
    </li>
  );
}
function Appaction({ appaction }) {
  return (
    <li className={styles.element}>
      <Link to={appaction.path}>
        <span>{appaction.icon}</span>
        <span className={styles.action}>{appaction.name}</span>
      </Link>
    </li>
  );
}
function Accaction({ accaction }) {
  return (
    <li className={styles.element}>
      <Link to={accaction.path}>
        <span>{accaction.icon}</span>
        <span className={styles.action}>{accaction.name}</span>
      </Link>
    </li>
  );
}

export default Sidebar;
