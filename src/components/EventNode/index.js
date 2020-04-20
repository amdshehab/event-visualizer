import React from "react";
import styles from "./index.module.scss";

const EventNode = ({ coords: { x, y }, icon, name, imgUrl }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
      }}
    >
      <div
        style={{
          width: "50px",
          height: "50px",
          backgroundImage: `url(${imgUrl})`,
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
        }}
      ></div>
      <p>{name}</p>
    </div>
  );
};

export default EventNode;
