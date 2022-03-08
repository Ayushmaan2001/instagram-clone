const app = require("express")();
const bodyparser = require("body-parser");
const core = require("cors");
app.use(core());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

const p = [];

app.post("/register", (req, res) => {
  p.push(req.body.user);
  res.send("done");
});

app.get("/show", (req, res) => {
  res.send(p);
});

app.listen(3001, () => {
  console.log("Started");
});
