import express from "express";
import { sessions } from "../sessions";

export const getAllSessions = (_req: express.Request, res: express.Response) => {
  console.log(sessions);
  res.status(200).json(sessions);
};
