import React from "react";
import { render } from "@testing-library/react";
import EventNode from "../index";
import { DndProvider } from "react-dnd";
import Backend from "react-dnd-html5-backend";

describe("EventNode", () => {
  it("Renders the correct information", () => {
    const { getByText } = render(
      <DndProvider backend={Backend}>
        <EventNode name="slack" coords={{ x: 10, y: 20 }} imgUrl="fdfdf" />
      </DndProvider>
    );
    expect(getByText("slack")).toBeDefined();
  });
});
