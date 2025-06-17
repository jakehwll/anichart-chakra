import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import z from "zod";
import {
  ApolloClient,
  createHttpLink,
  gql,
  InMemoryCache,
} from "@apollo/client";
import { AnilistPageResponseSchema } from "@/utils/graphql";

const ANILIST_GRAPHQL_ENDPOINT = "https://graphql.anilist.co";

const apolloClient = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: ANILIST_GRAPHQL_ENDPOINT,
  }),
  cache: new InMemoryCache(),
});

const app = new Hono()
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
      })
    ),
    async (c) => {
      const { query } = c.req.valid("json");
      const graphql = await apolloClient.query({
        query: gql`
          ${query}
        `,
      });

      const res = AnilistPageResponseSchema.parse(graphql);

      return c.json(res, 200);
    }
  );

export const GET = app.fetch;
export const POST = app.fetch;

export type AppType = typeof app;
