import React from "react";
import styles from "./index.module.scss";

const EventNode = ({ coords: { x, y }, icon, name }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
      }}
    >
      <p>{name}</p>
    </div>
  );
};

export default EventNode;
