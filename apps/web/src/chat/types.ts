export type LayoutNode = VerticalSplitNode | HorizontalSplitNode | PanelNode;

export type VerticalSplitNode = {
  id: string;
  type: "VerticalSplit";
  firstChild: LayoutNode;
  secondChild: LayoutNode;
};

type HorizontalSplitNode = {
  id: string;
  type: "HorizontalSplit";
  firstChild: LayoutNode;
  secondChild: LayoutNode;
};

export type PanelNode = {
  id: string;
  type: "Panel";
  panel: Panel;
};

export type Panel = {
  id: string;
  activeTabIndex: number;
  tabs: Tab[];
};

export type Tab = {
  id: string;
  title: string;
  session: Session | null;
};

export type Session = {
  id: string;
};
