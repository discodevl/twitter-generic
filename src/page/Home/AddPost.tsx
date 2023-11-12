import { useState } from "react";
import { FiImage } from "react-icons/fi";
import { HiOutlineEmojiHappy } from "react-icons/hi";
import { ImEarth } from "react-icons/im";
import Avatar from "../../components/Avatar/Avatar";
import useGetUserID from "../../hooks/useGetUserID";
import styles from "./AddPost.module.css";
import { useMutation } from "@tanstack/react-query";
import { postTweet } from "../../util/api";
import { v4 as uuidv4 } from "uuid";

type AddPostProps = {
  reload: () => void;
}

function AddPost({reload}: AddPostProps) {
  const [text, setText] = useState("");
  const [isTxtAreaFocused, setIsTxtAreaFocused] = useState(false);

  const tweetMutation = useMutation({ mutationFn: postTweet });

  const { userID } = useGetUserID();

  function createTweet() {
    tweetMutation.mutate({
      id: uuidv4(),
      userID,
      content: text,
      imageURL: "",
      replys: [],
      type: "tweet",
      likes: [],
      bookmarks: [],
      creationDate: new Date().toISOString(),
    });
    setText("");
    reload()
  }

  return (
    <div className={styles["container-post"]}>
      <div className={styles["avatar-wrap"]}>
        <Avatar tag={userID} />
      </div>

      <div className={styles["post-area"]}>
        <textarea
          placeholder="What is happening?!"
          maxLength={280}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={Math.ceil(text.length / 67) || 1}
          onFocus={() => setIsTxtAreaFocused(true)}
        />

        {isTxtAreaFocused && (
          <div className={styles["post-cfg"]}>
            <ImEarth color="#1d9bf0" />
            <span className={styles["span-cfg"]}>Everyone can reply</span>
          </div>
        )}

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
              disabled={!text}
              onClick={createTweet}
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddPost;
