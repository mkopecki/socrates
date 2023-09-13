import express from "express";
import { sessions } from "@/state";

export const getSession = (req: express.Request, res: express.Response) => {
  const { sessionId } = req.params;

  console.log(sessionId);

  const session = sessions.find((session) => session.id === sessionId);

  if (!session) {
    res.status(404).send();
  }

  res.status(200).json(session);
};
