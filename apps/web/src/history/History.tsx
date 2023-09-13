import React from "react";
import { ChatSession } from "types";
import * as uuid from "uuid";

type ReducedSession = Omit<ChatSession, "model" | "env" | "messageHistory">;

const history: ReducedSession[] = [
  {
    id: uuid.v4(),
    name: "Test Session 1",
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
  {
    id: uuid.v4(),
    name: "Test Session 2",
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),
  },
];

export const History = () => {
  return (
    <div className="flex flex-col space-y-2">
      {history.map((session) => (
        <SessionElement session={session} />
      ))}
    </div>
  );
};

type SessionElementProps = {
  session: ReducedSession;
};

export const SessionElement = ({ session }) => {
  return (
    <div className="border py-1 px-2">
      <span>{session.name}</span>
    </div>
  );
};
