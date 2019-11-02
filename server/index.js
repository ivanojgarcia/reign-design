import express from 'express';

// Apollo server
import { ApolloServer } from "apollo-server-express";
import { typeDefs } from "./data/schema";
import { resolvers } from "./data/resolvers";



const app = express();

const server = new ApolloServer({typeDefs, resolvers});

server.applyMiddleware({app});

app.listen({port: 4000}, () => {
    console.log(`The server run on http://localhost:4000${server.graphqlPath}`)
})