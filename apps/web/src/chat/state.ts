import { LayoutNode } from "./types";
import * as uuid from "uuid";
import { atom } from "jotai";

// example starting state
export const layoutState = atom<LayoutNode>({
  id: uuid.v4(),
  type: "Panel",
  panel: {
    id: uuid.v4(),
    activeTabIndex: -1,
    tabs: [],
  },
});
