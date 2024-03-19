import express from "express";
import connectDb from "./config/dbConnect.js";
import handlingError from "./middlewares/handlingErrors.js";
import routes from "./routes/index.js";

const mongoConnection = connectDb();

mongoConnection.on("error", (err) => {
  console.error("Connection error", err);
});

mongoConnection.once("open", () => {
  console.log("Connection success");
});

const app = express();
routes(app);

app.use(handlingError);

export default app;