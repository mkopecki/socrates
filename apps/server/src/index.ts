import { createServer } from "./server";
import { log } from "logger";
import { router } from "./routes";

const port = process.env.PORT || 3001;
const server = createServer();

server.use("/v1", router)

server.listen(port, () => {
  log(`api running on ${port}`);
});
