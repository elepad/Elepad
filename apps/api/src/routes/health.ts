import { OpenAPIHono, z } from "@hono/zod-openapi";

export const healthApp = new OpenAPIHono();

healthApp.openapi(
  {
    method: "get",
    path: "/health",
    responses: {
      200: {
        description: "Health check",
        content: {
          "application/json": {
            schema: z.object({
              ok: z.boolean(),
              uptime: z.number(),
              ts: z.string(),
            }),
          },
        },
      },
    },
    tags: ["Health"],
  },
  (c) =>
    c.json({
      ok: true,
      uptime: process.uptime(),
      ts: new Date().toISOString(),
    }),
);
