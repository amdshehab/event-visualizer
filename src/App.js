import React from "react";
import styles from "./index.module.scss";
import Visualizer from "./components/Visualizer";
import EventNode from "./components/EventNode";
import { dummyData } from "./utils/dummy-data";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.title}>
        <h1>Ahmed's Visualizer</h1>
      </div>
      <Visualizer>
        {dummyData.map(({ x, y, name, imgUrl }) => (
          <EventNode
            coords={{
              x,
              y,
            }}
            name={name}
            key={name}
            imgUrl={imgUrl}
          />
        ))}
      </Visualizer>
    </div>
  );
}

export default App;
