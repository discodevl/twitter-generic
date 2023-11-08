import { useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import { getUserByID } from "../../util/api";
import { useNavigate } from "react-router-dom";
import { TweetType } from "../../model/interfaces";
import styles from "./SinglePostDetailed.module.css";
import Avatar from "../Avatar/Avatar";
import {
  FiBookmark,
  FiDownload,
  FiHeart,
  FiMessageCircle,
  FiMoreHorizontal,
} from "react-icons/fi";

type SinglePostDetailedProps = {
  tweet: TweetType;
};

function SinglePostDetailed({ tweet }: SinglePostDetailedProps) {
  const { data } = useQuery({
    queryKey: ["user", tweet.userID],
    queryFn: () => getUserByID(tweet.userID),
  });
  const [hoverIco, setHoverIco] = useState(false);
  const [hover, setHover] = useState({
    comment: false,
    like: false,
    view: false,
    bookmark: false,
    download: false,
  });

  const navigate = useNavigate();

  const datePost = useMemo(() => {
    return new Date(tweet.creationDate);
  }, [tweet]);

  return (
    <div>
      <div
        className={styles["container-post"]}
        onClick={() => navigate(`/status/${tweet.id}`)}
      >
        <div className={styles["ico-avatar"]}>
          <div className={styles["user-header"]}>
            <Avatar hover tag={data?.id}/>
            <div className={styles["naming-info"]}>
              <span className={styles["user-name"]}>{data?.name}</span>
              <span className={styles["user-tag"]}>{data?.id}</span>
            </div>
          </div>
          <div
            className={styles["ico-wrap"]}
            onMouseEnter={() => setHoverIco(true)}
            onMouseLeave={() => setHoverIco(false)}
          >
            <FiMoreHorizontal
              size="18px"
              color={hoverIco ? "rgb(29, 156, 240)" : "#2f3336"}
            />
          </div>
        </div>
        <div className={styles["content-wrap"]}>
          <div className={styles["author-info"]}></div>
          <div className={styles["content"]}>
            <span>{tweet.content}</span>
          </div>
          {tweet.imageURL && (
            <img className={styles["img-tweet"]} src={tweet.imageURL} />
          )}
          <span
            className={styles["time-span"]}
          >{`${datePost.getHours()}:${datePost.getMinutes()} · ${datePost.toLocaleDateString()}`}</span>
          <div className={styles["panel"]}>
            <div className={styles["opt-wrap"]}>
              <div
                className={styles["ico"]}
                onMouseEnter={() =>
                  setHover((prev) => ({ ...prev, comment: true }))
                }
                onMouseLeave={() =>
                  setHover((prev) => ({ ...prev, comment: false }))
                }
              >
                <FiMessageCircle
                  size="18px"
                  color={hover.comment ? "rgb(29, 156, 240)" : "#2f3336"}
                />
              </div>
              <span
                className={styles["counter"]}
                style={{ color: hover.comment && "rgb(25, 140, 216)" }}
              >
                {tweet.comments.length}
              </span>
            </div>
            <div className={styles["opt-wrap"]}>
              <div
                className={styles["ico-like"]}
                onMouseEnter={() =>
                  setHover((prev) => ({ ...prev, like: true }))
                }
                onMouseLeave={() =>
                  setHover((prev) => ({ ...prev, like: false }))
                }
              >
                <FiHeart
                  size="18px"
                  color={hover.like ? "rgb(210,20,108)" : "#2f3336"}
                />
              </div>
              <span
                className={styles["counter"]}
                style={{ color: hover.like && "rgb(210,20,108)" }}
              >
                {tweet.likes}
              </span>
            </div>
            <div className={styles["opt-wrap"]}>
              <div
                className={styles["ico"]}
                onMouseEnter={() =>
                  setHover((prev) => ({ ...prev, bookmark: true }))
                }
                onMouseLeave={() =>
                  setHover((prev) => ({ ...prev, bookmark: false }))
                }
              >
                <FiBookmark
                  size="18px"
                  color={hover.bookmark ? "rgb(29, 156, 240)" : "#2f3336"}
                />
              </div>
            </div>
            <div className={styles["opt-wrap"]}>
              <div
                className={styles["ico"]}
                onMouseEnter={() =>
                  setHover((prev) => ({ ...prev, download: true }))
                }
                onMouseLeave={() =>
                  setHover((prev) => ({ ...prev, download: false }))
                }
              >
                <FiDownload
                  size="18px"
                  color={hover.download ? "rgb(29, 156, 240)" : "#2f3336"}
                />
              </div>
            </div>
          </div>
          <div className={styles["reply-container"]}>
            <Avatar tag={data?.id}/>
            <textarea placeholder="receba"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePostDetailed;
