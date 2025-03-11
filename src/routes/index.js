const LeadsRoutes = require("../routes/leads").default.map((route) => ({
  ...route,
  path: `/leads${route.path}`, // Add prefix "/leads" to leads routes
}));

const AdminRoutes = require("../routes/admin").default.map((route) => ({
  ...route,
  path: `/admin${route.path}`, // Add prefix "/admin" to admin routes
}));

const UserRoutes = require("../routes/user").default.map((route) => ({
  ...route,
  path: `/user${route.path}`, // Add prefix "/user" to user routes
}));

const RoutesConfig = [
  ...require("../routes/homeRoutes").default, // no prefix
  ...LeadsRoutes,
  ...AdminRoutes,
  ...UserRoutes,
];

export default RoutesConfig;
