import React, { useState } from 'react'
import { FiSettings } from "react-icons/fi";
import styles from "./Header.module.css";

function Header() {
    const [isForYouSelectd, setIsForYouSelectd] = useState(true);
  return (
    <header>
        <div
          className={styles["header-opt"]}
          onClick={() => setIsForYouSelectd(true)}
        >
          <div className={styles["label-wrap"]} style={{borderBottom: isForYouSelectd && "3px solid #1d9bf0", fontWeight: isForYouSelectd && "bold"}}>For you</div>
        </div>
        <div
          className={styles["header-opt"]}
          onClick={() => setIsForYouSelectd(false)}
        >
          <div className={styles["label-wrap"]} style={{borderBottom: !isForYouSelectd && "3px solid #1d9bf0", fontWeight: !isForYouSelectd && "bold"}}>Following</div>
        </div>
        <div className={styles["config"]}>
          <div className={styles["ico-cfg-wrap"]}>
            <FiSettings size="15px" />
          </div>
        </div>
      </header>
  )
}

export default Header