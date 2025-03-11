import Login from "../../views/leads/Login";
import Sidebar from "../../views/leads/dashboard";

const Routes = [
  {
    path: "/login",
    view: Login,
    layout: "leadsLayout",
    permission: "leads",
    title: "Login Leads",
  },
  {
    path: "/dashboard",
    view: Sidebar,
    layout: "leadsLayout",
    permission: "leads",
    title: "Dashboard Leads",
  },
];

export default Routes;
