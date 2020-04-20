import React from "react";
import styles from "./index.module.scss";

const InterestingNode = ({ name, imgUrl }) => {
  return (
    <div className={styles.InterestingNode}>
      <div
        className={styles.InterestingIcon}
        style={{
          backgroundImage: `url(${imgUrl})`,
        }}
      ></div>
      <p>{name}</p>
    </div>
  );
};

export default InterestingNode;
