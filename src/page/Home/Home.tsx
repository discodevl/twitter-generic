import { useQuery } from "@tanstack/react-query";
import SinglePost from "../../components/SinglePost/SinglePost";
import { getAllTweets } from "../../util/api";
import AddPost from "./AddPost";
import Header from "./Header";
import styles from "./Home.module.css";

function Home() {
  const { data } = useQuery({ queryKey: ["tweets"], queryFn: getAllTweets });

  return (
    <div className={styles["container-feed"]}>
      <Header />
      <AddPost />
      {data?.map((tweet) => (
        <SinglePost key={tweet.id} tweet={tweet} />
      ))}
    </div>
  );
}

export default Home;
