const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Running my CURN server");
});

app.listen(port, () => {
  console.log("Running server on port", port);
});

const uri =
  "mongodb+srv://mymongodbuser1:<password>@cluster0.dkgxs.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log("Hitting the database.");
  client.close();
});
