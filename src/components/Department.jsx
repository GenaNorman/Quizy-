import React from "react";
import styles from "./Department.module.css";

const initialPaperCategory = [
  {
    id: 121,
    name: "System Analysis",
    year: "2018",
  },
  {
    id: 212,
    name: "Cyber Security",
    year: "2020",
  },
  {
    id: 282,
    name: "Algorith and data structure",
    year: "2022",
  },
  {
    id: 282,
    name: "English Language",
    year: "2022",
  },
];

const initialNetworkCategory = [
  {
    id: 121,
    name: "System Analysis",
    year: "2018",
  },
  {
    id: 212,
    name: "Cyber Security",
    year: "2020",
  },
  {
    id: 282,
    name: "Algorith and data structure",
    year: "2022",
  },
  {
    id: 282,
    name: "English Language",
    year: "2022",
  },
];
const initialWebCategory = [
  {
    id: 121,
    name: "System Analysis",
    year: "2018",
  },
  {
    id: 212,
    name: "Cyber Security",
    year: "2020",
  },
  {
    id: 282,
    name: "Algorith and data structure",
    year: "2022",
  },
  {
    id: 282,
    name: "English Language",
    year: "2022",
  },
];
function Department() {
  return (
    <div className={styles.coursedetails}>
      <div className={styles.direction}>
        <h4>
          Home/papers/<span color={styles.grey}>department</span>
        </h4>
      </div>
      <div className={styles.coursetable}>
        <div className={styles.heading}>
          <span className={styles.tabletopics}>Past Questions</span>
          <div>
            <span>Sort By</span>
            <span className={styles.dropdown}>&rsaquo;</span>
          </div>
        </div>
        <span className={styles.tabletopic}>Software Engineering</span>
        <div className={styles.coursetablecontent}>
          {initialPaperCategory.map((category) => (
            <Category category={category} key={category.id} />
          ))}
        </div>

        <span className={styles.tabletopic}>Network And Security</span>
        <div className={styles.coursetablecontent}>
          {initialNetworkCategory.map((network) => (
            <Network network={network} key={network.id} />
          ))}
        </div>

        <span className={styles.tabletopic}>
          Web Developement And Graphic design
        </span>
        <div className={styles.coursetablecontent}>
          {initialWebCategory.map((web) => (
            <Web web={web} key={web.id} />
          ))}
        </div>
      </div>
    </div>
  );
}
function Category({ category }) {
  return (
    <div className={styles.content}>
      {/* <div className={styles.couseimage}></div> */}
      <p className={styles.title}>{category.name}</p>
      {/* <input type="range" /> */}
      <a href="sidflis" className={styles.viewcourse}>
        View
        <span>&rarr;</span>
      </a>
    </div>
  );
}
function Network({ network }) {
  return (
    <div className={styles.coursetablecontent}>
      <div className={styles.content}>
        {/* <div className={styles.couseimage}></div> */}
        <p className={styles.title}>{network.name}</p>
        {/* <input type="range" /> */}
        <a href="sidflis" className={styles.viewcourse}>
          View
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
function Web({ web }) {
  return (
    <div className={styles.coursetablecontent}>
      <div className={styles.content}>
        {/* <div className={styles.couseimage}></div> */}
        <p className={styles.title}>{web.name}</p>
        {/* <input type="range" /> */}
        <a href="sidflis" className={styles.viewcourse}>
          View
          <span>&rarr;</span>
        </a>
      </div>
    </div>
  );
}
export default Department;
