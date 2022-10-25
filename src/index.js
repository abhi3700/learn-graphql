import express from "express";
// import resolvers from "./resolvers";
import schema from "./schema";

import { graphqlHTTP } from "express-graphql";

const app = express();

app.get("/", (req, res) => {
  res.send("Up and running with graphql crash course");
});

const root = {
  lco: () => console.log("LCO is the best place to learn graphql"),
};

// const root = resolvers;

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(4000, () => console.log("Running on port 4000"));
