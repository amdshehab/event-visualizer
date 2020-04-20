import React from "react";
import styles from "./index.module.scss";
import Visualizer from "./components/Visualizer";
import EventNode from "./components/EventNode";
import InterestingConnectors from "./components/InterestingConnectors";
import { dummyData } from "./utils/dummy-data";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.title}>
        <h1>Ahmed's Visualizer</h1>
      </div>
      <DndProvider backend={Backend}>
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
        <InterestingConnectors />
      </DndProvider>
    </div>
  );
}

export default App;
