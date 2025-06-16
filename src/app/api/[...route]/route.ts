import { Hono } from "hono";

const app = new Hono().basePath("/api");

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const health = app.get("/health", (c) => {
  return c.body(null, 204);
});

export const GET = app.fetch;
export const POST = app.fetch;

export type AppType = typeof health;
