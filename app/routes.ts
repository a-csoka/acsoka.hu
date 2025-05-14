import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("./routes/Redirect.tsx"),
    route("/:lang", "./routes/Home.tsx")
] satisfies RouteConfig;