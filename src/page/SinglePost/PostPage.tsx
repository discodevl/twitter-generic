import styles from "./PostPage.module.css";
import { Link, useLocation } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";

function PostPage() {
  const id = useLocation();
  console.log(id)
  return (
    <div className={styles["container-post"]}>
      <div className={styles["header-post"]}>
        <Link to="..">
          <div className={styles["ico-wrap"]}>
            <FiArrowLeft size="20px" />
          </div>
        </Link>
        <span>Post</span>
      </div>
    </div>
  );
}

export default PostPage;
