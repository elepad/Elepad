import { OpenAPIHono } from "@hono/zod-openapi";
import { swaggerUI } from "@hono/swagger-ui";
import { withSecurity } from "./middleware/security.js";
import { withErrors } from "./middleware/errors.js";
import { healthApp } from "./routes/health.js";

const app = new OpenAPIHono();

// global middleware
app.use("*", withErrors);
app.use("*", withSecurity);

// OpenAPI document + Swagger UI
app.doc("/openapi.json", {
  openapi: "3.1.0",
  info: { title: "Elepad API", version: "1.0.0" },
});

// mount routes
app.route("/", healthApp);

// Swagger UI
app.get(
  "/docs",
  swaggerUI({
    url: "/openapi.json",
  }),
);

export default app;
