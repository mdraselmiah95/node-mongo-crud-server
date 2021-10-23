const expess = require("express");
const app = expess();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Running my CURN server");
});

app.listen(port, () => {
  console.log("Running server on port", port);
});
