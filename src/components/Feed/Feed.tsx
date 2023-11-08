import Header from "./Header";
import styles from './Feed.module.css'
import AddPost from "./AddPost";
import SinglePost from "./SinglePost";
import {useQuery} from '@tanstack/react-query';
import { getAllTweets } from "../../util/api";

function Feed() {
  const {data} = useQuery({ queryKey: ['tweets'], queryFn: getAllTweets });

  console.log(data);
  
  return (
    <div className={styles["container-feed"]}>
      <Header />
      <AddPost />
      {data?.map(tweet => <SinglePost key={tweet.id} tweet={tweet} />)}
    </div>
  );
}

export default Feed;
