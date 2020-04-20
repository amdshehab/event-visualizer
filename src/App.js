import React from "react";
import styles from "./index.module.scss";
import Visualizer from "./components/Visualizer";
import EventNode from "./components/EventNode";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.title}>
        <h1>Ahmed's Visualizer</h1>
      </div>
      <Visualizer>
        <EventNode
          coords={{
            x: 10,
            y: 10,
          }}
          name="slack"
        />
      </Visualizer>
    </div>
  );
}

export default App;
