import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import express from "express";
import http from "http";
import cors from "cors";
import "dotenv/config";

const port = process.env.PORT;
const hostname = process.env.HOSTNAME;

const app = express();
const httpServer = http.createServer(app);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [ApolloServerPluginDrainHttpServer({ httpServer })],
});
await server.start();

app.use(
  "/graphql",
  cors(),
  express.json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

app.listen(port, hostname, () => {
  console.log(`🚀 Server is listening at ${hostname}:${port}`);
});

await new Promise((resolve) =>
  httpServer.listen({ port: port, hostname: hostname }, resolve)
).then(() => {
  console.log(`🚀 Server is listening at ${hostname}:${port}`);
});
