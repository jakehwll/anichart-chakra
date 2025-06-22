import { zValidator } from "@hono/zod-validator";
import { Hono } from "hono";
import { getCookie, setCookie } from "hono/cookie";
import { cors } from "hono/cors";
import z from "zod";

const app = new Hono()
  .use("*", cors({ origin: "*" }))
  .basePath("/api")
  .get("/health", (c) => {
    return c.body(null, 204);
  })
  .get("/auth", (c) => {
    const username = getCookie(c, "anichart-username");
    const jobTitle = getCookie(c, "anichart-job-title");

    return c.json({
      username,
      jobTitle,
    });
  })
  .post(
    "/auth",
    zValidator(
      "json",
      z.object({ username: z.string(), jobTitle: z.string() })
    ),
    async (c) => {
      setCookie(c, "anichart-username", c.req.valid("json").username);
      setCookie(c, "anichart-job-title", c.req.valid("json").jobTitle);

      return c.json({ ok: true }, 200);
    }
  );

export const GET = app.fetch;
export const POST = app.fetch;
export const OPTIONS = app.fetch;

export type AppType = typeof app;
