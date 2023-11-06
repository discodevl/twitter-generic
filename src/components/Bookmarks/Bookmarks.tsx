import { FiMoreHorizontal } from "react-icons/fi";
import styles from "./Bookmarks.module.css";
// import SinglePost from "../Feed/SinglePost";

function Bookmarks() {
  return (
    <div className={styles["container-bookmarks"]}>
      <div className={styles["header-bk"]}>
        <div className={styles["title-wrap"]}>
          <span className={styles["username"]}>userName</span>
          <span className={styles["tag"]}>@userName</span>
        </div>
        <div className={styles["ico-wrap"]}>
          <FiMoreHorizontal size="25px" />
        </div>
      </div>

      {/* <SinglePost tweet={{ userID: "12", content: "bkmarf", likes: 1 }} /> */}
    </div>
  );
}

export default Bookmarks;
