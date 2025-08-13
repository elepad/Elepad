import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { serve } from "@hono/node-server";
import { withSecurity } from "./middleware/security.js";
import { withErrors } from "./middleware/errors.js";
import { healthApp } from "./routes/health.js";
import { config } from "./config.js";

const app = new OpenAPIHono();

// global middleware
app.use("*", withErrors);
app.use("*", withSecurity);

// mount routes
app.route("/", healthApp);

// OpenAPI document + Swagger UI
app.doc("/openapi.json", {
  openapi: "3.1.0",
  info: { title: "Elepad API", version: "1.0.0" },
});
app.get("/docs", swaggerUI({ url: "/openapi.json" }));

serve({ fetch: app.fetch, port: config.port }, (info) => {
  console.log(`🚀 API running on http://localhost:${config.port}`);
  console.log(`📜 Swagger UI at http://localhost:${config.port}/docs`);
});
