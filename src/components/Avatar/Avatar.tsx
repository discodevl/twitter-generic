import React, { CSSProperties } from "react";
import styles from "./Avatar.module.css";

type AvatarProps = {
  imgURL: string;
  hover?: boolean;
  style?: CSSProperties;
};

function Avatar({ imgURL, hover, style }: AvatarProps) {
  return (
    <div className={[styles["container-avatar"], hover && "onmouse"].join(" ")} style={{...style}}>
      <img src={imgURL} />
    </div>
  );
}

export default Avatar;
