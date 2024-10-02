import "./services/dotenv";
import { PORT, SERVER_ON } from "./server/consts";
import server from "./server/server";

// server-up

server.listen(PORT, () => {
  console.log(SERVER_ON);
  setInterval(ping, 14 * 60 * 1000);
});

const ping = async () => {
  await fetch(process.env.API_BASE_URL!);
  console.log("pong");
};
