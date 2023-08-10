import { createServer } from "./server";
import { log } from "logger";
import { createSession } from "./routes/createSession";
import { getAllSessions } from "./routes/getAllSessions";
import { createMessage } from "./routes/createMessage";

const port = process.env.PORT || 3001;
const server = createServer();

// add routes
server.post("/session", createSession);
server.get("/sessions", getAllSessions);

server.post("/session/:sessionId/message", createMessage);

server.listen(port, () => {
  log(`api running on ${port}`);
});
