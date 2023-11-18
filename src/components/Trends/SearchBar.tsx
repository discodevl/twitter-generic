import { FiSearch } from "react-icons/fi";
import styles from "./SearchBar.module.css";
import { CSSProperties, useEffect, useRef, useState } from "react";
import { useClickOutside } from "@react-hookz/web";
import { useQuery } from "@tanstack/react-query";
import { getTweetsBySearch } from "../../util/api";

type SearchBarProps = {
  style?: CSSProperties;
};

function SearchBar({ style }: SearchBarProps) {
  const [text, setText] = useState("");
  const [focusInput, setFocusInput] = useState(false);
  const ref = useRef<HTMLInputElement>(null);

  const {data} = useQuery({queryKey: ["filtred-tweets", text],queryFn: () => getTweetsBySearch(text)})

  useClickOutside(ref, () => {
    setFocusInput(false);
  });

  useEffect(() => {
    if(text.length < 3) return;
    console.log(data)
  }, [text]);

  return (
    <div
      className={styles["container-input"]}
      style={{ border: focusInput && "1px solid #1d9bf0", ...style }}
    >
      <div className={styles["ico-wrap"]}>
        <FiSearch size="20px" color={focusInput ? "#1d9bf0" : "#71767b"} />
      </div>
      <input
        ref={ref}
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setFocusInput(true)}
        placeholder="Search"
      />
    </div>
  );
}

export default SearchBar;
