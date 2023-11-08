import styles from "./PostPage.module.css";
import { Link, useParams } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { getTweetByID } from "../../util/api";
import { useQuery } from "@tanstack/react-query";
import SinglePostDetailed from "../../components/SinglePostDetailed/SinglePostDetailed";

function PostPage() {
  const {postID} = useParams();
  const {data} = useQuery({ queryKey: ['tweet', postID], queryFn: () => getTweetByID(postID) });

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
      {data && <SinglePostDetailed tweet={data} />}
    </div>
  );
}

export default PostPage;
