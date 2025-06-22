import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import z from "zod";
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { cors } from "hono/cors";

const ANILIST_GRAPHQL_ENDPOINT = "https://graphql.anilist.co";

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: ANILIST_GRAPHQL_ENDPOINT,
  }),
  cache: new InMemoryCache(),
});

const app = new Hono()
  .use(cors())
  .basePath("/api")
  .get("/health", (c) => {
    return c.body(null, 204);
  })
  .post(
    "/graphql",
    zValidator(
      "json",
      z.object({
        query: z.string(),
        variables: z.record(z.any()).optional(),
      })
    ),
    async (c) => {
      const { query, variables } = c.req.valid("json");
      const graphql = await apolloClient.query({
        query: gql`
          ${query}
        `,
        variables,
      });

      return c.json(graphql, 200);
    }
  );

export const GET = app.fetch;
export const POST = app.fetch;

export type AppType = typeof app;
