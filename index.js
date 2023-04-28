import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
//import unless from "express-unless";

import connectDB from "./config/db.config.js";
//import auth from "./middlewares/auth.js";
//import errors from "./middlewares/errors.js";

const app = express();
const port = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;

//Database Connection
connectDB(DATABASE_URL);

// Promise = global.Promise;
// connect(dbConfig.db, { useNewUrlParser: true, useUnifiedTopology: true }).then(
//   () => {
//     console.log("Databse Connected");
//   },
//   (error) => {
//     console.log("Database Can't be connected: " + error);
//   }
// );

// auth.authenticateToken.unless = unless;
// app.use(
//   auth.authenticateToken.unless({
//     path: [
//       { url: "/users/login", methods: ["POST"] },
//       { url: "/users/register", methods: ["POST"] },
//     ],
//   })
// );

//JSON
app.use(express.json());

//coros
app.use(cors());
//app.use("/users", require("./routes/users.routes"));
//app.use(errors.errorHandler);

app.listen(port, function () {
  console.log(`Ready to Go!${port}`);
});
