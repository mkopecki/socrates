import { sessions } from "@/state";
import express from "express";
import { ChatSession, Message } from "types";
import * as uuid from "uuid";
import * as gpt4 from "@/models/gpt4";

export const createSession = (_req: express.Request, res: express.Response) => {
  // create new session
  const session: ChatSession = {
    id: uuid.v4(),
    name: "New Session",
    createdAt: Date.now(),
    lastUpdatedAt: Date.now(),

    model: gpt4.makeModel(),
    env: {
      systemPrompt: "",
    },

    messageHistory: [],
  };

  sessions.push(session);

  // create system prompt message
  const systemPromptMessage: Message = {
    id: uuid.v4(),
    createdAt: Date.now(),
    owner: "system",
    content: session.env.systemPrompt,
  };

  session.messageHistory.push(systemPromptMessage);

  res.status(200).send("ok");
};
