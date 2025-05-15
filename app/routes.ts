import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
    route("/:lang", "./routes/Home.tsx")
] satisfies RouteConfig;