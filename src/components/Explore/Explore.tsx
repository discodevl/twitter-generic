import { FiSettings } from "react-icons/fi";
import SearchBar from "../Trends/SearchBar";
import styles from "./Explore.module.css";

function Explore() {
  return (
    <div className={styles["container-explore"]}>
      <div className={styles["search-wrap"]}>
        <SearchBar style={{ width: "90%", marginTop: 0 }} />
        <div className={styles["ico-wrap"]}>
          <FiSettings size="18px" />
        </div>
      </div>

      <div
        className={styles["img-search"]}
        style={{
          backgroundImage:
            "url(https://pbs.twimg.com/media/F-HzV1zXQAADQDe?format=jpg&name=small)",
        }}
      ></div>

      <div className={styles["divider"]}></div>

      <div className={styles["content-search"]}>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deserunt laudantium excepturi delectus magni ipsa necessitatibus incidunt, itaque quos nulla numquam aut provident esse animi facere distinctio officia, ratione quibusdam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deserunt laudantium excepturi delectus magni ipsa necessitatibus incidunt, itaque quos nulla numquam aut provident esse animi facere distinctio officia, ratione quibusdam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deserunt laudantium excepturi delectus magni ipsa necessitatibus incidunt, itaque quos nulla numquam aut provident esse animi facere distinctio officia, ratione quibusdam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deserunt laudantium excepturi delectus magni ipsa necessitatibus incidunt, itaque quos nulla numquam aut provident esse animi facere distinctio officia, ratione quibusdam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deserunt laudantium excepturi delectus magni ipsa necessitatibus incidunt, itaque quos nulla numquam aut provident esse animi facere distinctio officia, ratione quibusdam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deserunt laudantium excepturi delectus magni ipsa necessitatibus incidunt, itaque quos nulla numquam aut provident esse animi facere distinctio officia, ratione quibusdam!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo deserunt laudantium excepturi delectus magni ipsa necessitatibus incidunt, itaque quos nulla numquam aut provident esse animi facere distinctio officia, ratione quibusdam!</p>
      </div>
    </div>
  );
}

export default Explore;
