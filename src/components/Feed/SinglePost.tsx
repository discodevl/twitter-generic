import {
  FiBarChart2,
  FiBookmark,
  FiDownload,
  FiHeart,
  FiMessageCircle,
  FiMoreHorizontal,
} from "react-icons/fi";
import { TweetType } from "../../model/interfaces";
import Avatar from "../Avatar/Avatar";
import styles from "./SinglePost.module.css";
import { useState } from "react";

type SinglePostProps = {
  tweet: TweetType;
};

function SinglePost({ tweet }: SinglePostProps) {
  const [hoverIco, setHoverIco] = useState(false);
  const [hover, setHover] = useState({
    comment: false,
    like: false,
    view: false,
    bookmark: false,
    download: false,
  });

  return (
    <div className={styles["container-post"]}>
      <div className={styles["ico-avatar"]}>
        <Avatar hover imgURL="https://noticiasdatv.uol.com.br/media/_versions/artigos_2021/luva-de-pedreiro-abandona-carreira-foto-reproducao-instagram_fixed_large.jpg" />
      </div>
      <div className={styles["content-wrap"]}>
        <div className={styles["author-info"]}>
          <div className={styles["naming-info"]}>
            <span className={styles["user-name"]}>userName</span>
            <span className={styles["user-tag"]}>@userName ·</span>
            <span className={styles["user-tag"]}>10m</span>
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
        <div className={styles["content"]}>
          <span>{tweet.content}</span>
        </div>
        <div className={styles["panel"]}>
          <div className={styles["opt-wrap"]}>
            <div className={styles["ico"]} onMouseEnter={() => setHover((prev) => ({ ...prev, comment: true }))}
              onMouseLeave={() =>
                setHover((prev) => ({ ...prev, comment: false }))
              }>
              <FiMessageCircle size="18px" color={hover.comment ? "rgb(29, 156, 240)" : "#2f3336"} />
            </div>
            <span className={styles["counter"]} style={{ color: hover.comment && "rgb(25, 140, 216)" }}>12</span>
          </div>
          <div className={styles["opt-wrap"]}>
            <div className={styles["ico-like"]} onMouseEnter={() => setHover((prev) => ({ ...prev, like: true }))}
              onMouseLeave={() =>
                setHover((prev) => ({ ...prev, like: false }))
              }>
              <FiHeart size="18px" color={hover.like ? "rgb(210,20,108)" : "#2f3336"} />
            </div>
            <span className={styles["counter"]} style={{ color: hover.like && "rgb(210,20,108)" }}>12</span>
          </div>
          <div className={styles["opt-wrap"]}>
            <div
              className={styles["ico"]}
              onMouseEnter={() => setHover((prev) => ({ ...prev, view: true }))}
              onMouseLeave={() =>
                setHover((prev) => ({ ...prev, view: false }))
              }
            >
              <FiBarChart2
                size="18px"
                color={hover.view ? "rgb(29, 156, 240)" : "#2f3336"}
              />
            </div>
            <span
              className={styles["counter"]}
              style={{ color: hover.view && "rgb(25, 140, 216)" }}
            >
              12
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
      </div>
    </div>
  );
}

export default SinglePost;
