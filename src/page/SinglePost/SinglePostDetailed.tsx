import { useClickOutside } from "@react-hookz/web";
import { useQuery } from "@tanstack/react-query";
import { useMemo, useRef, useState } from "react";
import {
  FiBookmark,
  FiDownload,
  FiHeart,
  FiImage,
  FiMessageCircle,
  FiMoreHorizontal,
} from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import Reply from "../../components/Reply/Reply";
import useGetUserID from "../../hooks/useGetUserID";
import { TweetType } from "../../model/interfaces";
import { getUserByID } from "../../util/api";
import styles from "./SinglePostDetailed.module.css";

type SinglePostDetailedProps = {
  tweet: TweetType;
};

function SinglePostDetailed({ tweet }: SinglePostDetailedProps) {
  const { data } = useQuery({
    queryKey: ["user", tweet.userID],
    queryFn: () => getUserByID(tweet?.userID),
  });
  const { userID } = useGetUserID();
  const [hoverIco, setHoverIco] = useState(false);
  const [hover, setHover] = useState({
    comment: false,
    like: false,
    view: false,
    bookmark: false,
    download: false,
  });
  const [replyText, setReplyText] = useState("");
  const [isTxtAreaFocused, setIsTxtAreaFocused] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useClickOutside(ref, () => {
    setIsTxtAreaFocused(false);
  });

  const datePost = useMemo(() => {
    return new Date(tweet.creationDate);
  }, [tweet]);

  return (
    <>
      <div
        className={styles["container-post"]}
        // onClick={() => navigate(`/status/${tweet.id}`)}
      >
        <div className={styles["ico-avatar"]}>
          <div className={styles["user-header"]}>
            <Link to={`../${data?.id}`}>
              <Avatar hover tag={data?.id} />
            </Link>
            <div className={styles["naming-info"]}>
              <span
                className={styles["user-name"]}
                onClick={() => navigate(`../${data?.id}`)}
              >
                {data?.name}
              </span>
              <span
                className={styles["user-tag"]}
                onClick={() => navigate(`../${data?.id}`)}
              >
                {data?.id}
              </span>
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
                {tweet?.replys?.length}
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
              <span
                className={styles["counter"]}
                style={{ color: hover.bookmark && "rgb(25, 140, 216)" }}
              >
                {tweet?.bookmarks}
              </span>
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
          <div ref={ref} className={styles["reply-wrap"]}>
            {isTxtAreaFocused && (
              <span className={styles["user-tag"]}>
                Replying to <Link to={`/${data?.id}`}>{data?.id}</Link>
              </span>
            )}
            <div className={styles["reply-container"]}>
              <Avatar tag={userID} />
              <div className={styles["text-wrap"]}>
                <textarea
                  placeholder="Post you reply"
                  maxLength={280}
                  value={replyText}
                  onChange={(e) => setReplyText(e.target.value)}
                  rows={Math.ceil(replyText.length / 65) || 1}
                  onFocus={() => setIsTxtAreaFocused(true)}
                />
                {isTxtAreaFocused && (
                  <div className={styles["text-addons"]}>
                    <div className={styles["ico-txts"]}>
                      <div className={styles["ico-wrap"]}>
                        <FiImage size="15px" color="#1d9bf0" />
                      </div>
                      <div className={styles["ico-wrap"]}>
                        <HiOutlineEmojiHappy size="15px" color="#1d9bf0" />
                      </div>
                    </div>
                    <div>
                      <button
                        className={styles["post-btn"]}
                        disabled={!replyText}
                      >
                        Post
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["replys-wrap"]}>
        {tweet?.replys.map((reply) => (
          <Reply key={tweet.id} replyID={reply} />
        ))}
      </div>
    </>
  );
}

export default SinglePostDetailed;
