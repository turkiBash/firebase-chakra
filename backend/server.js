import express from "express";
import data from "./Data.js";
import mongoose from "mongoose";
import details from "./dbModel.js";

// app config
const app = express();
const port = 9000;

// middlewares
app.use(express.json());
app.use((req, res, next) => {
  res.setHeaders("Access-Control-Allow-Origin", "*"),
    res.setHeaders("Access-Control-Allow-Headers", "*"),
    next();
});
// DB config
const connection_URL =
  "mongodb+srv://admin:P09XIe8aqrQPPqPN@cluster0.6x6ua.mongodb.net/testingDatabase?retryWrites=true&w=majority";

mongoose.connect(connection_URL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});
// api endpoints
app.get("/", (req, res) => res.status(200).send("Turki Albasheer"));

app.get("/v1/data", (req, res) => res.status(200).send(data));

app.get("/v2/posts", (req, res) => {
  details.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});

app.post("/v2/posts", (req, res) => {
  const dbDetails = req.body;

  details.create(dbDetails, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

// listen
app.listen(port, () => console.log(`Listening on localhost: ${port}`));
