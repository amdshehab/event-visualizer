import React from "react";
import { render } from "@testing-library/react";
import Visualizer from "../index";

describe("Visualizer", () => {
  const dummyData = ["slack", "jenkins"];
  const DummyNode = ({ name }) => <p>{name}</p>;
  it("Renders a list of Event Nodes", () => {
    const { getByText } = render(
      <Visualizer>
        {dummyData.map((name) => (
          <DummyNode name={name} key={name} />
        ))}
      </Visualizer>
    );
    expect(getByText("slack")).toBeDefined();
    expect(getByText("jenkins")).toBeDefined();
  });
});
