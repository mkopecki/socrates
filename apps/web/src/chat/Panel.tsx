import React from "react";
import { useSetAtom } from "jotai";
import { layoutState } from "./state";
import * as LayoutTypes from "./types";
import * as uuid from "uuid";
import { findAndModifyNode } from "./Chat";
import clsx from "clsx";
import { Tab } from "./Tab";

type PanelProps = {
  panelNode: LayoutTypes.PanelNode;
  panel: LayoutTypes.Panel;
};

export const Panel: React.FC<PanelProps> = ({ panelNode, panel }) => {
  const setLayout = useSetAtom(layoutState);

  // session modification functions
  const addTab = () => {
    const newTab: LayoutTypes.Tab = {
      id: uuid.v4(),
      title: "New Tab",
      session: null,
    };

    setLayout((prevLayout) => {
      // deep clone layout state
      const newLayout = JSON.parse(JSON.stringify(prevLayout));

      findAndModifyNode(newLayout, panelNode.id, (node) => {
        if (node.type === "Panel") {
          node.panel.tabs.push(newTab);
          node.panel.activeTabIndex = node.panel.tabs.length - 1;
        }
      });

      return newLayout;
    });
  };

  const changeTab = (i: number) => {
    setLayout((prevLayout) => {
      // deep clone layout state
      const newLayout = JSON.parse(JSON.stringify(prevLayout));

      findAndModifyNode(newLayout, panelNode.id, (node) => {
        if (node.type === "Panel") {
          node.panel.activeTabIndex = i;
        }
      });

      return newLayout;
    });
  };

  return (
    <div className="flex flex-col border h-full">
      <div className="flex flex-row">
        {panel.tabs.map((tab, i) => (
          <div
            className={clsx("py-1 px-3 border-r", i === panel.activeTabIndex && "bg-slate-800")}
            onClick={() => changeTab(i)}
          >
            <span>{tab.title}</span>
          </div>
        ))}

        <div className="py-1 px-3 border-r" onClick={() => addTab()}>
          <span>+</span>
        </div>
      </div>

      {panel.activeTabIndex != -1 && <Tab tab={panel.tabs[panel.activeTabIndex]} />}
    </div>
  );
};
