import Header from "./Header";
import styles from './Feed.module.css'
import AddPost from "./AddPost";

function Feed() {

  return (
    <div className={styles["container-feed"]}>
      <Header />
      <AddPost />
    </div>
  );
}

export default Feed;
