import React, { useState } from "react";
import { useDrop } from "react-dnd";
import styles from "./index.module.scss";
import InterestingNode from "./InterestingNode";

const InterestingConnectors = () => {
  const [connectorsList, setConnectorsList] = useState([]);
  const [{ isOver }, drop] = useDrop({
    accept: "node",
    drop: (item) => setConnectorsList((list) => [...list, item]),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div ref={drop} className={styles.InterestingConnectors}>
      <div>
        <h1>DRAG HERE -></h1>
      </div>
      {connectorsList.map(({ name, imgUrl }, i) => (
        <InterestingNode name={name} imgUrl={imgUrl} key={name + i} />
      ))}
    </div>
  );
};

export default InterestingConnectors;
