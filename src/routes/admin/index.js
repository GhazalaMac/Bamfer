import Login from "../../views/admin/Login";

const Routes = [
  {
    path: "/login",
    view: Login,
    layout: "adminLayout",
    permission: "admin",
    title: "Login Admin",
  },
];

export default Routes;
