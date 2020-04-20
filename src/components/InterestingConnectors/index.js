import React, { useState } from "react";
import { useDrop } from "react-dnd";
import styles from "./index.module.scss";
import InterestingNode from "./InterestingNode";

const InterestingConnectors = () => {
  const [connectorsList, setConnectorsList] = useState([]);
  const [{ isOver }, drop] = useDrop({
    accept: "node",
    drop: (item) => {
      console.log("being dropped ->", item);
      setConnectorsList((list) => [...list, item]);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={styles.InterestingConnectors}>
      {connectorsList.map(({ name, imgUrl }) => (
        <InterestingNode name={name} imgUrl={imgUrl} />
      ))}
    </div>
  );
};

export default InterestingConnectors;
