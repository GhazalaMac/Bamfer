import Home from "../views"; // TODO ADD HOME

const Routes = [
  {
    path: "/",
    view: Home,
    layout: "userLayout",
    permission: "user",
    title: "Home page",
  },
  {
    path: "/about",
    view: Home,
    layout: "userLayout",
    permission: "user",
    title: "about",
  },
];

export default Routes;
