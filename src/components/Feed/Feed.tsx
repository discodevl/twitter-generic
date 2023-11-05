import Header from "./Header";
import styles from './Feed.module.css'
import AddPost from "./AddPost";
import SinglePost from "./SinglePost";

function Feed() {

  return (
    <div className={styles["container-feed"]}>
      <Header />
      <AddPost />
      <SinglePost tweet={{authorID: '123', content: 'receba caraiier', likes: 2, }} />
    </div>
  );
}

export default Feed;
