import React from "react";
import styles from "./index.module.scss";

const Visualizer = ({ children }) => (
  <div className={styles.Visualizer}>{children}</div>
);

export default Visualizer;
