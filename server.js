// adjust file paths based on your file structure
import db from "./db/connection.js";
import routes from "./routes/index.js";
import express from "express";
import cors from "cors"; // ** We need this so that our frontend can talk to our backend
import logger from "morgan"; // optional. this package gives us logs of our requests in the console

// INITIALIZE EXPRESS INSTANCE
const app = express();

// DEFINE PORT
const PORT = process.env.PORT || 3001;

// MIDDLEWARE
app.use(express.json());
app.use(cors());
app.use(logger("dev")); // only add if you use morgan

// MOUNNT ROUTES -- PREPEND ALL ROUTES WITH /whatever-you-want
app.use("/api", routes);

// CONNECT TO DATABASE
db.on("connected", () => {
  console.clear();
  console.log("Connected to MongoDB!")

  // SET UP SERVER TO LISTEN FOR REQUESTS ON PORT
  app.listen(PORT, () => {
    process.env.NODE_ENV === "production"
      ? console.log(`Express server running in production on port ${PORT}`)
      : console.log(`Express server running in development on: ${PORT}`);
  });
});