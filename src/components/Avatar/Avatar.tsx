import React, { CSSProperties, SyntheticEvent } from "react";
import styles from "./Avatar.module.css";
import { useQuery } from "@tanstack/react-query";
import { getUserByID } from "../../util/api";

type AvatarProps = {
  tag: string;
  hover?: boolean;
  style?: CSSProperties;
  onClick?: (e: SyntheticEvent) => void;
};


function Avatar({ hover, style, tag, onClick }: AvatarProps) {
  const { data } = useQuery({
    queryKey: ["user-tag", tag],
    queryFn: () => getUserByID(tag),
  });


  return (
    <div className={[styles["container-avatar"], hover && "onmouse"].join(" ")} style={{...style}} onClick={onClick}>
      <img src={data?.imgProfileURL} />
    </div>
  );
}

export default Avatar;
