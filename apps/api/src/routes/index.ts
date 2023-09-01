import express from "express";
import { createMessage } from "./sessions/createMessage";
import { createSession } from "./sessions/createSession";
import { getAllSessions } from "./sessions/getAllSessions";
import { getSession } from "./sessions/getSession";

const router = express.Router();

// session endpoints

router.post("/session", createSession);
router.get("/session/history", getAllSessions);
router.get("/session/:sessionId", getSession)
router.post("/session/:sessionId/message", createMessage);

export { router };
