import { useAtom } from "jotai";
import React from "react";
import { NavLink } from "react-router-dom";
import { Panel } from "./Panel";
import { layoutState } from "./state";
import * as LayoutTypes from "./types";

export const ChatPage = () => {
  return (
    <div className="flex flex-col space-y-4 h-screen">
      <NavBar />

      <div className="p-4 h-full">
        <Chat />
      </div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="w-full flex space-x-4 px-4 py-2 border-b">
      <span>S</span>

      <NavLink to="/">
        <span>Chat</span>
      </NavLink>

      <NavLink to="/history">
        <span>History</span>
      </NavLink>

      <NavLink to="/settings">
        <span>Settings</span>
      </NavLink>
    </div>
  );
};

const Chat = () => {
  const [layout] = useAtom(layoutState);
  return <div>{renderLayout(layout)}</div>;
};

const renderLayout = (node: LayoutTypes.LayoutNode): React.ReactNode => {
  const { type } = node;

  if (type === "HorizontalSplit") {
    return (
      <div className="flex flex-row space-x-2">
        <div className="grow">{renderLayout(node.firstChild)}</div>
        <div className="grow">{renderLayout(node.secondChild)}</div>
      </div>
    );
  }

  if (type === "VerticalSplit") {
    return (
      <div className="flex flex-col space-y-2">
        {renderLayout(node.firstChild)}
        {renderLayout(node.secondChild)}
      </div>
    );
  }

  if (type === "Panel") {
    return <Panel panelNode={node} panel={node.panel} />;
  }

  return null;
};

export const findAndModifyNode = (
  rootNode: LayoutTypes.LayoutNode,
  targetId: string,
  modifier: (node: LayoutTypes.LayoutNode) => void
) => {
  if (rootNode.id === targetId) {
    modifier(rootNode);
  }

  if (rootNode.type === "HorizontalSplit" || rootNode.type === "VerticalSplit") {
    findAndModifyNode(rootNode.firstChild, targetId, modifier);
    findAndModifyNode(rootNode.secondChild, targetId, modifier);
  }
};
