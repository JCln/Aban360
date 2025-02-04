import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route('base-info', './routes/base-info.tsx')
] satisfies RouteConfig;
