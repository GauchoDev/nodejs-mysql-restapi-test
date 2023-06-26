import app from "./app.js";
import { PORT } from "./config.js";

const port = PORT;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);

  const currentTime = new Date();
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();

  console.log(`Current time: ${hours}:${minutes}:${seconds}`);
});
