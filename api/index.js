import express from "express";
import bodyparser from "body-parser";
import functions from "./apiCalls.js";
import core from "cors";
const app = express();

const {createUser}  = functions;

app.use(core());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.post("/register", (req, res) => {
  const body = req.body;
  createUser(body.user, body.first, body.last).then((data) => {
    res.send("Successfullt created")
  }).catch((err) => {
    res.send(err);
  });
});

app.listen(3001, () => {
  console.log("Started");
});
