import express from "express";
import expressGraphQL from "express-graphql";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import app from express();
const PORT = process.env.PORT || "4000";
const db = "mongodb://harry:Sophie777@ds052968.mlab.com:52968/lunch";
import schema from "./graphql/";


// Connect to MongoDB with Mongoose.
mongoose
  .connect(
    db,
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
  )
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  app.use(
    "/graphql",
    cors(),
    bodyParser.json(),
    expressGraphQL({
      schema,
      graphiql: true
    })
  );
  
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  


// var typeDefs = [`
//     type Query {
//         hello: String
//     }

//     schema {
//         query: Query
//     }
// `];


// var app = express();

// const server = new ApolloServer({ typeDefs, resolvers });
// server.applyMiddleware({ app });

// app.listen(4000, () => 
//     console.log('Now browse to localhost:4000/graphql'),
//     opn('http://localhost:4000/graphql')
// );