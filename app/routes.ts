import { type RouteConfig, route, index } from "@react-router/dev/routes";

export default [
    index("./routes/Redirect.tsx"),
    route("/:lang", "./routes/App.tsx")
] satisfies RouteConfig;