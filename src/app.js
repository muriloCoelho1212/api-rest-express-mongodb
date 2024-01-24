import express from "express";
import connectDb from "./config/dbConnect.js";
import routes from "./routes/index.js";
import handlingError from "./middlewares/handlingErrors.js";

const mongoConnection = await connectDb();

mongoConnection.on("error", (err) => {
  console.error("Connection error", err);
});

mongoConnection.once("open", () => {
  console.log("Connection success");
});

const app = express();
routes(app);

// eslint-disable-next-line no-unused-vars
app.use(handlingError);

export default app;