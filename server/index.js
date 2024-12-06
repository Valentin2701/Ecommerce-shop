import express from "express";
import mongoose from "mongoose";
import { DBURL, PORT } from "./env/env.js";

const app = express();

app.get('/', (req, res) => {
    res.send("Hello, Home!");
})

mongoose
  .connect(DBURL)
  .then(() => {
    console.log("DB connected!");
    app.listen(5000, () => {
      console.log(`Server is listening on port ${PORT}`);
    });
  })
  .catch((err) => console.log("DB not connected!", err));
