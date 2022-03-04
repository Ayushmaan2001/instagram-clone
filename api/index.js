const app = require("express")();
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));

app.listen(3001, () => {
  console.log("Started");
});
