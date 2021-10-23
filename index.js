const express = require("express");
const { MongoClient } = require("mongodb");
const app = express();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Running my CRUD server ");
});

app.listen(port, () => {
  console.log("Running server on port", port);
});
const uri =
  "mongodb+srv://mynewproject:9ZAZd6dxvzHN6eok@cluster0.rzfie.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
client.connect((err) => {
  const collection = client.db("foodMaster").collection("users");
  // perform actions on the collection object
  console.log("Hitting the database");
  const user = {
    name: "Alex Andrea",
    email: "alex@gmail.com",
    phone: "019234556822",
  };
  collection.insertOne(user).then(() => {
    console.log("insert success");
  });
  //   console.error(err);
  //   client.close();
});
