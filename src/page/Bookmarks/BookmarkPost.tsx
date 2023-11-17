import { useMutation, useQuery } from "@tanstack/react-query";
import { SyntheticEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Avatar from "../../components/Avatar/Avatar";
import {
  decreaseBookmark,
  getTweetByID,
  getUserByID,
  removeBookmarkToUser,
} from "../../util/api";
import styles from "./BookmarkPost.module.css";
import {
  FiBarChart2,
  FiDownload,
  FiHeart,
  FiMessageCircle,
  FiMoreHorizontal,
} from "react-icons/fi";
import { GoBookmarkFill } from "react-icons/go";
import useGetUserID from "../../hooks/useGetUserID";

type BookmarkPostProps = {
  postID: string;
};

function BookmarkPost({ postID }: BookmarkPostProps) {
  const { userID } = useGetUserID();
  const { data: currentUser } = useQuery({
    queryKey: ["user", userID],
    queryFn: () => getUserByID(userID),
  });
  const { data: post } = useQuery({
    queryKey: ["tweet", postID],
    queryFn: () => getTweetByID(postID),
  });
  const { data, refetch } = useQuery({
    queryKey: ["user", post?.userID],
    queryFn: () => getUserByID(post?.userID),
  });

  const removeBookmarkMutation = useMutation({
    mutationFn: () => decreaseBookmark(post.id, post.bookmarksQuantity),
  });

  const removeBookmarkUserMutation = useMutation({
    mutationFn: () =>
      removeBookmarkToUser(userID, {
        bookmarkList: currentUser?.bookmarks,
        tweetID: post.id,
      }),
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

  function postPage(e: SyntheticEvent) {
    e.stopPropagation();
    navigate(`/status/${postID}`);
  }

  async function removeBookmark(e:SyntheticEvent) {
    //todo
    e.stopPropagation()
    removeBookmarkMutation.mutate();
    removeBookmarkUserMutation.mutate();
    await refetch()
  }

  return (
    <div className={styles["container-post"]} onClick={postPage}>
      <div className={styles["ico-avatar"]}>
        <Avatar hover tag={data?.id} />
      </div>
      <div className={styles["content-wrap"]}>
        <div className={styles["author-info"]}>
          <div className={styles["naming-info"]}>
            <span
              className={styles["user-name"]}
              onClick={() => navigate(data?.id)}
              style={{ zIndex: 3 }}
            >
              {data?.name}
            </span>
            <span className={styles["user-tag"]}>{data?.id} ·</span>
            <span className={styles["user-tag"]}>20m</span>
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
          <span>{post?.content}</span>
        </div>
        {post?.imageURL && (
          <img className={styles["img-tweet"]} src={post?.imageURL} />
        )}
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
              {post?.replys?.length || 0}
            </span>
          </div>
          <div className={styles["opt-wrap"]}>
            <div
              className={styles["ico-like"]}
              onMouseEnter={() => setHover((prev) => ({ ...prev, like: true }))}
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
              {post?.likes.length}
            </span>
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
              {Math.ceil(Math.random() * 5)}
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
              onClick={removeBookmark}
            >
              <GoBookmarkFill size="18px" color="rgb(29, 156, 240)" />
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

export default BookmarkPost;
