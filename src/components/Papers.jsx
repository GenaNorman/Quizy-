import React, { useState } from "react";
import styles from "./Papers.module.css";

const questionpaper = [
  {
    id: 121,
    name: "Digital Electronic",
    year: "2018",
  },
  {
    id: 212,
    name: "English Language",
    year: "2020",
  },
  {
    id: 282,
    name: "Programming 1",
    year: "2022",
  },
];
function Papers() {
  const [search, setSearch] = useState("");
  return (
    <div className={styles.addquestion}>
      <h4>
        Home/Department/<span className={styles.grey}>questions</span>
      </h4>
      <div className={styles.controlbox}>
        <div>
          <h3 className={styles.controlheading}>Question</h3>
        </div>
        <div>
          <input
            type="search"
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search question"
            className={styles.papername}
          />
        </div>
        <select className={styles.papernam}>
          <option value="">sort by</option>
          <option value="">Name</option>
          <option value="">Year</option>
        </select>
      </div>

      {questionpaper
        .filter((paper) => {
          return search.toLowerCase() === ""
            ? paper
            : paper.name.toLowerCase().includes(search);
        })
        .map((paper) => (
          <Question paper={paper} key={paper.id} />
        ))}
    </div>
  );
}

function Question({ paper }) {
  return (
    <>
      <div className={styles.paper}>
        <span className={styles.papericon}>&#128196;</span>
        <div>
          <p>{paper.name}</p>
          <p>{paper.year}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
export default Papers;
