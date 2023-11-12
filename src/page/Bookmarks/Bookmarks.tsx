import { FiMoreHorizontal } from "react-icons/fi";
import styles from "./Bookmarks.module.css";
import useGetUserID from "../../hooks/useGetUserID";
import { useQuery } from "@tanstack/react-query";
import { getUserByID } from "../../util/api";
import BookmarkPost from "./BookmarkPost";

function Bookmarks() {
  const { userID } = useGetUserID();
  
  console.log(userID);

  const { data } = useQuery({
    queryKey: ["user", userID],
    queryFn: () => getUserByID(userID),
  });

  return (
    <div className={styles["container-bookmarks"]}>
      <div className={styles["header-bk"]}>
        <div className={styles["title-wrap"]}>
          <span className={styles["username"]}>Bookmarks</span>
          <span className={styles["tag"]}>{data?.id}</span>
        </div>
        <div className={styles["ico-wrap"]}>
          <FiMoreHorizontal size="25px" />
        </div>
      </div>

      {data?.bookmarks
        .filter((bk) => bk === userID)
        .map((id) => (
          <BookmarkPost key={id} postID={id} />
        ))}
    </div>
  );
}

export default Bookmarks;
