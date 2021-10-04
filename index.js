import express from "express";
// import { connect } from "mongoose";
import pkg from "mongoose";
const { connect } = pkg;
// import { green, red } from "chalk";
import pkg1 from "chalk";
const { green, red } = pkg1;
import cors from "cors";
import fileUpload from "express-fileupload";
import { config } from "dotenv";
config();

// import { PORT, MONGODB_URI } from "./config/constants";

// import middlewaresConfig from "./config/middleware";
import movieRouter from "./routes/movie.routes.js";

const app = express();
// app.use(fileUpload());
// middlewaresConfig(app);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use(movieRouter);

connect(process.env.MONGODB_URI)
  .then((result) => {
    console.log(
      green.bold(
        `
        Yep this is working 🍺
        App listen on port: ${process.env.PORT} 🍕
        Env: ${process.env.NODE_ENV} 🦄
      `
      )
    );
    app.listen(process.env.PORT);
  })
  .catch((err) => {
    console.log(red("Cannot run!", err));
  });
