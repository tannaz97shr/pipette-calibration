import { Node } from "react-flow-renderer";

import CollectWeightNode from "../../components/collectWeightsNode";

export let weightTimes = 5;

const nodeTypes = { weightCollector: CollectWeightNode };

export const nodes: Node[] = [
  {
    id: "0",
    type: "input",
    position: { x: 250, y: 0 },
    data: {
      label: ["start"],
    },
  },
  {
    id: "1",
    position: { x: 250, y: 50 },
    data: {
      label: [
        "Place a beaker with 1000 ul of distilled H2O",
        "Balance and Tare",
      ],
    },
  },
  {
    id: "2",
    position: { x: 250, y: 100 },
    data: {
      label: ["Place a new pipette tip on the pipettor"],
    },
  },
  {
    id: "3",
    position: { x: 250, y: 150 },
    data: {
      label: [`Let's Weigh ${weightTimes} times`],
    },
  },
  {
    id: "4",
    position: { x: 0, y: 200 },
    data: {
      label: ["Aspirate and dispense 100% of the volume into the beaker"],
    },
  },
  {
    id: "4",
    position: { x: 0, y: 250 },
    type: "weightCollector",
    data: {
      label: ["Enter Weight"],
    },
  },
  {
      id: "5",
      position: { x: 500, y: 250 },
      data: {
          labe: ["Done!", "Now Check The Table To See The Results"]
      }
  }
];

export const edges = [];
