import React from "react";
import styles from "./index.module.scss";
import { useDrag } from "react-dnd";

const EventNode = ({ coords: { x, y }, icon, name, imgUrl }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "node", name, imgUrl },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      style={{
        position: "absolute",
        top: y,
        left: x,
        opacity: isDragging ? 0.5 : 1,
        fontSize: 25,
        fontWeight: "bold",
        cursor: "move",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      ref={drag}
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
