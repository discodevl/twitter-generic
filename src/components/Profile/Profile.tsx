import { FiArrowLeft, FiCalendar } from "react-icons/fi";
import styles from "./Profile.module.css";
import { Link } from "react-router-dom";
import Avatar from "../Avatar/Avatar";
// import SinglePost from "../Feed/SinglePost";

function Profile() {
  return (
    <div className={styles["container-profile"]}>
      <div className={styles["profile-header"]}>
        <Link to="..">
          <div className={styles["ico-wrap"]}>
            <FiArrowLeft size="20px" />
          </div>
        </Link>
        <div className={styles["labels-wrap"]}>
          <span className={styles["span-name"]}>userName</span>
          <span className={styles["span-tag"]}>120 posts</span>
        </div>
      </div>
      <div
        className={styles["banner-user"]}
        style={{
          backgroundImage:
            "url(https://icdn-1.motor1.com/images/mgl/Mq2GY/s1/top-10-tuned-cars-of-2012.jpg)",
        }}
      ></div>
      <div className={styles["profile-info"]}>
        <div className={styles["avatar-row"]}>
          <Avatar
            style={{
              width: "133px",
              height: "133px",
              borderRadius: "65px",
              position: "relative",
              top: "-70px",
            }}
            imgURL="https://noticiasdatv.uol.com.br/media/_versions/artigos_2021/luva-de-pedreiro-abandona-carreira-foto-reproducao-instagram_fixed_large.jpg"
          />
          <button className={styles["btn-edit-profile"]}>Edit profile</button>
        </div>
        <span className={styles["span-name"]}>userName</span>
        <span className={styles["span-tag"]}>@userName</span>
        <div className={styles["date-section"]}>
          <FiCalendar color="#71767b" />
          <span className={styles["span-tag"]}>Joined April 2020</span>
        </div>
        <div className={styles["follow-section"]}>
          <span className={styles["span-tag"]}>
            <b style={{ color: "white" }}>10</b> Following
          </span>
          <span className={styles["span-tag"]}>
            <b style={{ color: "white" }}>10</b> Followers
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
        {/* <SinglePost tweet={{ id: '1', userID: "asas", content: "dsds", likes: 12 }} /> */}
        
      </div>
    </div>
  );
}

export default Profile;
