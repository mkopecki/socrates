import { sessions } from "@/state";
import express from "express";

export const getAllSessions = (_req: express.Request, res: express.Response) => {
  res.status(200).json(sessions);
};
