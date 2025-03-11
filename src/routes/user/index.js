import Dashboard from "../../views/user/Dashboard";
import Login from "../../views/user/Login";
import Signup from "../../views/user/Signup";
import Bills from "../../views/user/Bills"
import History from "../../views/user/History"
import Calendar from "../../views/user/Calendar"
import Appointment from "../../views/user/Appointment"
import Profile from "../../views/user/Profile"
import Package from "../../views/user/Package";
import Tasks from "../../views/user/Tasks";
const Routes = [
  {
    path: "/login",
    view: Login,
    layout: "userLayout",
    permission: "user",
    title: "Login User",
  },
  {
    path: "/signup",
    view: Signup,
    layout: "userLayout",
    permission: "user",
    title: "Signup User",
  },
  {
    path: "/dashboard",
    view: Dashboard,
    layout:'userLayout',
    permission:'user',
    title:'Dashboard User'
  },
  {
    path: "/bill",
    view: Bills,
    layout:'userLayout',
    permission:'user',
    title:'Bills User'
  },
  {
    path: "/history",
    view: History,
    layout:'userLayout',
    permission:'user',
    title:'History User'
  },
  {
    path: "/calendar",
    view: Calendar,
    layout:'userLayout',
    permission:'user',
    title:'Calendar User'
  },
  {
    path: "/appointment",
    view: Appointment,
    layout:'userLayout',
    permission:'user',
    title:'Appointment User'
  },
  {
    path: "/profile",
    view: Profile,
    layout:'userLayout',
    permission:'user',
    title:'Profile User'
  },
  {
    path: "/package",
    view: Package,
    layout:'userLayout',
    permission:'user',
    title:'Package User'
  },
  {
    path: "/task",
    view: Tasks,
    layout:'userLayout',
    permission:'user',
    title:'Tasks User'
  },
];

export default Routes;
