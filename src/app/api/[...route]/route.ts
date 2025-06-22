import { Hono } from "hono";
import { cors } from "hono/cors";

const app = new Hono()
  .use("*", cors({ origin: "*" }))
  .basePath("/api")
  .get("/health", (c) => {
    return c.body(null, 204);
  });

export const GET = app.fetch;
export const POST = app.fetch;
export const OPTIONS = app.fetch;

export type AppType = typeof app;
