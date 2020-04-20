import React from "react";
import styles from "./index.module.scss";
import { useDrag } from "react-dnd";

const EventNode = ({ coords: { x, y }, name, imgUrl }) => {
  const [{ isDragging }, drag] = useDrag({
    item: { type: "node", name, imgUrl },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  });

  return (
    <div
      className={styles.EventNode}
      style={{
        top: y,
        left: x,
        opacity: isDragging ? 0.5 : 1,
      }}
      ref={drag}
    >
      <div
        className={styles.EventImage}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <p>{name}</p>
    </div>
  );
};

export default EventNode;
