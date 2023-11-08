import {
  FiBookmark,
  FiHome,
  FiMoreHorizontal,
  FiSearch,
  FiTwitter,
  FiUser,
} from "react-icons/fi";
import {useNavigate} from 'react-router-dom';
import styles from "./SideBar.module.css";
import Avatar from "../Avatar/Avatar";
import useGetUserID from "../../hooks/useGetUserID";
import { useQuery } from "@tanstack/react-query";
import { getUserByID } from "../../util/api";

function SideBar() {
  const navigate = useNavigate();
  const {userID} = useGetUserID();

  const {data} = useQuery({
    queryKey: ["user", userID],
    queryFn: () => getUserByID(userID),
  })

  return (
    <nav className={[styles["container-nav"], ""].join(' ')}>
      <div className={styles["tt-button"]}>
        <FiTwitter size="30px" />
      </div>

      <div className={styles["btn-wrap"]} onClick={() => navigate('/')}>
        <div className={styles["ico-wrap"]}>
          <FiHome size="25px" />
        </div>
        <span className={styles["nav-span"]}>Home</span>
      </div>

      <div className={styles["btn-wrap"]} onClick={() => navigate('/explore')}>
        <div className={styles["ico-wrap"]}>
          <FiSearch size="25px" />
        </div>
        <span className={styles["nav-span"]}>Explore</span>
      </div>

      <div className={styles["btn-wrap"]} onClick={() => navigate('/bookmarks')}>
        <div className={styles["ico-wrap"]}>
          <FiBookmark size="25px" />
        </div>
        <span className={styles["nav-span"]}>Bookmarks</span>
      </div>

      <div className={styles["btn-wrap"]} onClick={() => navigate(`/${data?.id}`)}>
        <div className={styles["ico-wrap"]}>
          <FiUser size="25px" />
        </div>
        <span className={styles["nav-span"]}>Profile</span>
      </div>

      <button className={styles["post-btn"]}>Post</button>

      <div className={styles["btn-wrap"]}>
        <div className={styles["user-first-col"]}>
          <div className={styles["ico-wrap"]}>
            {/* <FiUser size="25px" /> */}
            <Avatar tag={data?.id}/>
          </div>
          <div className={styles["user-info-wrap"]}>
            <span className={styles["nav-span"]}>userName</span>
            <span className={styles["user-tag"]}>@username</span>
          </div>
        </div>
        <section className="dett-ico-wrap">
          <FiMoreHorizontal size="25px" />
        </section>
      </div>
    </nav>
  );
}

export default SideBar;
