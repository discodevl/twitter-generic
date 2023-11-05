import React from "react";
import styles from "./Avatar.module.css";

type AvatarProps = {
  imgURL: string;
  hover?: boolean;
};

function Avatar({ imgURL, hover }: AvatarProps) {
  return (
    <div className={[styles["container-avatar"], hover && "onmouse"].join(" ")}>
      <img src={imgURL} />
    </div>
  );
}

export default Avatar;
