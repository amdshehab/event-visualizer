# Event Visualizer

A Event Visualizer built using React

## Getting Started

- clone this repo
- yarn
- yarn start
- Drag Nodes from the pink colored area to the plum colored area, and enjoy the experience!

## Running Tests

- yarn
- yarn test

## Architecture

- The Visualizer component is a wrapper that takes a list of nodes as children.

- An EventNode renders connector info at the given coordinates, it's positioned absolutley according to the Visualizer allowing it to render content at the given coords.

- The InterestingConnectors is a wrapper that takes a list of InterestingNode's and renders them as children, it starts of with an empty Array as a piece of state. It can then add to the relevant connector to the list once it's dropped in, causing the items to render.

- The InterestingNode is simpler version of the EventNode, taking the basic connector details and rendering them.

## Edge Cases

There's tons, but the main ones i can think of are:

- EventNode collision on the grid matrix
- EventNode handling invalid coordinates
- Nodes overflowing
- InterestingConnectors handling duplicate node's

## Optimisations

- React memo to stop re-renders when rendering the InterestingNode's

## Dependencies

- react-dnd which exposes some really neat hooks from it's API to make drag/dropping a more sane experience

## Things left

- Add a dyanmic clock, wasn't my top priority
- I've set the height to 500px to make drag/dropping easier on a laptop
