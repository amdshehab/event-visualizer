import React, { memo } from "react";
import styles from "./index.module.scss";

const InterestingNode = memo(({ name, imgUrl }) => (
  <div className={styles.InterestingNode}>
    <div
      className={styles.InterestingIcon}
      style={{
        backgroundImage: `url(${imgUrl})`,
      }}
    ></div>
    <p>{name}</p>
  </div>
));

export default InterestingNode;
