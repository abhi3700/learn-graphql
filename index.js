import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Up and running with graphql crash course");
});

app.listen(4000, () => console.log("Running on port 4000"));
