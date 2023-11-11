import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import styles from "./Profile.module.css";
import { Link, useParams } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
import { useQuery } from "@tanstack/react-query";
import { getTweetsByUser, getUserByID } from "../../util/api";
import SinglePost from "../Feed/SinglePost";

function Profile() {
  const {userID} = useParams();

  const { data } = useQuery({
    queryKey: ["userTweets", userID],
    queryFn: () => getTweetsByUser(userID),
  });

  const userQ = useQuery({
    queryKey: ["user", userID],
    queryFn: () => getUserByID(userID),
  })

  return (
    <div className={styles["container-profile"]}>
      <div className={styles["profile-header"]}>
        <Link to="..">
          <div className={styles["ico-wrap"]}>
            <FiArrowLeft size="20px" />
          </div>
        </Link>
        <div className={styles["labels-wrap"]}>
          <span className={styles["span-name"]}>{userQ?.data?.name}</span>
          <span className={styles["span-tag"]}>120 posts</span>
        </div>
      </div>
      <div
        className={styles["banner-user"]}
        style={{
          backgroundImage:
            `url(${userQ?.data?.imgBannerURL})`,
        }}
      ></div>
      <div className={styles["profile-info"]}>
        <div className={styles["avatar-row"]}>
          <Avatar
          tag={userQ?.data?.id}
            style={{
              width: "133px",
              height: "133px",
              borderRadius: "65px",
              position: "relative",
              top: "-70px",
            }}
          />
          <button className={styles["btn-edit-profile"]}>Edit profile</button>
        </div>
        <span className={styles["span-name"]}>{userQ?.data?.name}</span>
        <span className={styles["span-tag"]}>{userQ?.data?.id}</span>
        <div className={styles["date-section"]}>
          <FiCalendar color="#71767b" />
          <span className={styles["span-tag"]}>Joined April 2020</span>
        </div>
        <div className={styles["follow-section"]}>
          <span className={styles["span-tag"]}>
            <b style={{ color: "white" }}>{userQ?.data?.following.length}</b> Following
          </span>
          <span className={styles["span-tag"]}>
            <b style={{ color: "white" }}>{userQ?.data?.followers.length}</b> Followers
          </span>
        </div>
        <div className={styles["opts"]}>
          <div className={styles["opt"]}>
            <div
              className={styles["label-wrap"]}
              style={{
                borderBottom: "3px solid #1d9bf0",
                fontWeight: "bold",
              }}
            >
              Posts
            </div>
          </div>
          <div className={styles["opt"]}>
            <div className={styles["label-wrap"]}>Reply</div>
          </div>
          <div className={styles["opt"]}>
            <div className={styles["label-wrap"]}>Highlights</div>
          </div>
          <div className={styles["opt"]}>
            <div className={styles["label-wrap"]}>Media</div>
          </div>
          <div className={styles["opt"]}>
            <div className={styles["label-wrap"]}>Likes</div>
          </div>
        </div>
      </div>
      <div className={styles["posts-wrap"]}>
        {data?.map((tweet) => (
          <SinglePost key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Profile;
