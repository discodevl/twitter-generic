import { useState } from "react";
import styles from "./AddPost.module.css";
import { FiImage, FiUser } from "react-icons/fi";
import { ImEarth } from "react-icons/im";
import { HiOutlineEmojiHappy } from "react-icons/hi";

function AddPost() {
  const [text, setText] = useState("");

  return (
    <div className={styles["container-post"]}>
      <div className={styles["avatar-wrap"]}>
        <FiUser size="35px" />
      </div>

      <div className={styles["post-area"]}>
        <textarea
          placeholder="What is happening?!"
          maxLength={280}
          value={text}
          onChange={(e) => setText(e.target.value)}
          rows={Math.ceil(text.length / 67) || 1}
        />

        <div className={styles["post-cfg"]}>
          <ImEarth color="#1d9bf0" />
          <span className={styles["span-cfg"]}>Everyone can reply</span>
        </div>

        <div className={styles["text-addons"]}>
          <div className={styles["ico-txts"]}>
            <div className={styles["ico-wrap"]}>
              <FiImage size="15px" color="#1d9bf0" />
            </div>
            <div className={styles["ico-wrap"]}>
              <HiOutlineEmojiHappy size="15px" color="#1d9bf0" />
            </div>
          </div>
          <div >
            <button className={styles["post-btn"]} disabled={!text}>Post</button>
          </div>
        </div>

      </div>
    </div>
  );
}

export default AddPost;
