import React from "react";
import { useState } from "react";
import * as uuid from "uuid";
import { ChatSessionComponent } from "./Chat";

// create initial set of sessions


// create internal representation of sessions and panels with attached components

// demo data
export type ChatSession = {
  id: string;
  name: string;
};

export type ChatPanel = {
  id: string;

  activeSession: number;
  sessions: ChatSession[];
};

const testSessions: ChatSession[] = [
  {
    id: uuid.v4(),
    name: "Session 1",
  },
  {
    id: uuid.v4(),
    name: "Session 2",
  },
  {
    id: uuid.v4(),
    name: "Session 3",
  },
];

const testPanel: ChatPanel = {
  id: uuid.v4(),

  sessions: testSessions,
  activeSession: 0,
};

// create internal representation
type InternalChatSession = ChatSession & {
  element: typeof ChatSessionComponent;
};

const makeChatSession = (chatSession: ChatSession): InternalChatSession => ({
  ...chatSession,
  element: <ChatSessionComponent chatSession={chatSession} />,
});

export const useChatPanel = () => {
  const [panel, setPanel] = useState(testPanel);

  // each chat is associated with a panel

  return {
    panel,
    setPanel,
  };
};

type Chat = {};
