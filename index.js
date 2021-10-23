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
async function run() {
  try {
    await client.connect();
    const database = client.db("foodMaster");
    const usersCollection = database.collection("users");
    // create a document to insert
    const doc = {
      title: "Record of a Shriveled Datum",
      content: "No bytes, no problem. Just insert a document, in MongoDB",
    };
    const result = await usersCollection.insertOne(doc);
    console.log(`A document was inserted with the _id: ${result.insertedId}`);
  } finally {
    await client.close();
  }
}
run().catch(console.dir);
