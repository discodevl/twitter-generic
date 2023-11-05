import { FiSearch } from "react-icons/fi";
import styles from "./SearchBar.module.css";
import { useRef, useState } from "react";
import { useClickOutside } from "@react-hookz/web";

function SearchBar() {
  const ref = useRef<HTMLInputElement>(null);
  const [text, setText] = useState("");
  const [focusInput, setFocusInput] = useState(false);

  useClickOutside(ref, () => {
    setFocusInput(false);
  });

  return (
    <div
      className={styles["container-input"]}
      style={{ border: focusInput && "1px solid #1d9bf0" }}
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
