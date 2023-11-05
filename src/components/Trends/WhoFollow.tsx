import { FiUser } from "react-icons/fi";
import styles from "./WhoFollow.module.css";

function WhoFollow() {
  return (
    <div className={styles["container-whofollow"]}>
      <span className={styles["title"]}>Who to follow</span>

      <div className={styles["user-container"]}>
        <FiUser size="40px" />
        <div className={styles["user-name-wrap"]}>
          <span className={styles["name-span"]}>userName</span>
          <span className={styles["tag-span"]}>@userName</span>
        </div>
        <button className={styles["btn-folllow"]} onClick={() => console.log('first')}>Follow</button>
      </div>

      <div className={styles["expand-container"]}>
        <span >Show more</span>
      </div>
    </div>
  );
}

export default WhoFollow;
