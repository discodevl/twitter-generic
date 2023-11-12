import { useMutation, useQuery } from "@tanstack/react-query";
import { SyntheticEvent, useState, useMemo } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  FiBarChart2,
  FiBookmark,
  FiDownload,
  FiMessageCircle,
  FiMoreHorizontal,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import useGetUserID from "../../hooks/useGetUserID";
import { TweetType } from "../../model/interfaces";
import { decreseLike, getUserByID, increseLike } from "../../util/api";
import Avatar from "../Avatar/Avatar";
import styles from "./SinglePost.module.css";

type SinglePostProps = {
  tweet: TweetType;
};

function SinglePost({ tweet }: SinglePostProps) {
  const { userID } = useGetUserID();
  const { data } = useQuery({
    queryKey: ["user", tweet.userID],
    queryFn: () => getUserByID(tweet.userID),
  });
  const likeIncMutation = useMutation({
    mutationFn: () => increseLike(tweet.id, { likes: tweet.likes, userID }),
  });
  const likeDecMutation = useMutation({
    mutationFn: () => decreseLike(tweet.id, { likes: tweet.likes, userID }),
  });
  const [hoverIco, setHoverIco] = useState(false);
  const [isLiked, setIsLiked] = useState<boolean>(tweet.likes.includes(userID));
  const [hover, setHover] = useState({
    comment: false,
    like: false,
    view: false,
    bookmark: false,
    download: false,
  });

  const navigate = useNavigate();

  const views = useMemo(() => Math.ceil(Math.random() * 5), [])

  function openDetails() {
    navigate(`/status/${tweet.id}`);
  }

  function moreOptions(e: SyntheticEvent) {
    e.stopPropagation();
  }

  function openProfile(e: SyntheticEvent) {
    e.stopPropagation();
    navigate(`/${tweet.userID}`);
  }

  function viewsHandler(e: SyntheticEvent) {
    e.stopPropagation();
    console.log("views")
  }

  function handleBookmark(e: SyntheticEvent) {
    e.stopPropagation();
    console.log("bokmark")
    //todo mutation bookmark
  }

  function handleLike(e: SyntheticEvent) {
    e.stopPropagation();
    if (isLiked) {
      likeDecMutation.mutate();
      setIsLiked(false);
    } else {
      likeIncMutation.mutate();
      setIsLiked(true);
    }
  }

  return (
    <div className={styles["container-post"]} onClick={openDetails}>
      <div className={styles["ico-avatar"]}>
        <Avatar hover tag={data?.id} onClick={openProfile} />
      </div>
      <div className={styles["content-wrap"]}>
        <div className={styles["author-info"]}>
          <div className={styles["naming-info"]}>
            <span className={styles["user-name"]} onClick={openProfile}>
              {data?.name}
            </span>
            <span className={styles["user-tag"]} onClick={openProfile}>
              {data?.id} ·
            </span>
            <span className={styles["user-tag"]}>20m</span>
          </div>
          <div
            className={styles["ico-wrap"]}
            onMouseEnter={() => setHoverIco(true)}
            onMouseLeave={() => setHoverIco(false)}
            onClick={moreOptions}
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
        {tweet.imageURL && (
          <img className={styles["img-tweet"]} src={tweet.imageURL} />
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
              {tweet?.replys?.length || 0}
            </span>
          </div>
          <div className={styles["opt-wrap"]} onClick={handleLike}>
            <div
              className={styles["ico-like"]}
              onMouseEnter={() => setHover((prev) => ({ ...prev, like: true }))}
              onMouseLeave={() =>
                setHover((prev) => ({ ...prev, like: false }))
              }
            >
              {isLiked ? (
                <AiFillHeart size="18px" color="rgb(210,20,108)" />
              ) : (
                <AiOutlineHeart
                  size="18px"
                  color={hover.like ? "rgb(210,20,108)" : "#2f3336"}
                />
              )}
            </div>
            <span
              className={styles["counter"]}
              style={{ color: (hover.like || isLiked) && "rgb(210,20,108)" }}
            >
              {tweet.likes.length + (isLiked ? 1 : 0)}
            </span>
          </div>
          <div className={styles["opt-wrap"]} onClick={viewsHandler}>
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
              {views}
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
              onClick={handleBookmark}
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
