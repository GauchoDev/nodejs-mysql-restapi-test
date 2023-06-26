import express from "express";

import employeesRoutes from "./routes/employees.routes.js";
import indexRoutes from "./routes/index.routes.js";
import "./config.js";
import { PORT } from "./config.js";

const app = express();

app.use(express.json());
/*This line is needed to be able to send and interprate json body,
 example req.body when I'm testing postman */
app.get("/", (req, res) => {
  res.send("Fresh New Page");
});
app.use(indexRoutes);
app.use("/api", employeesRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "endpoint not found",
  });
});

export default app;
