import express from "express";
import { log } from "logger";
import { CreateMessageRequestBody, Message } from "types";
import { sessions } from "../sessions";
import * as uuid from "uuid";

export const createMessage = async (
  req: express.Request<CreateMessageRequestBody>,
  res: express.Response
): Promise<void> => {
  // find session
  const { sessionId, content } = req.body;
  const session = sessions.find((s) => s.id === sessionId);
  if (!session) {
    log("session could not be found");
    res.status(404).send("session could not be found");
    return;
  }

  // create new message
  const message: Message = {
    id: uuid.v4(),
    createdAt: Date.now(),
    owner: "user",
    content,
  };

  session.messageHistory.push(message);

  // prompt model
  const assistantMessages = await session.model.prompt(session.messageHistory, session.env);
  session.messageHistory.push(...assistantMessages);

  res.status(200).send("ok");
};
