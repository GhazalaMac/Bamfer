// App.js
// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

//TODO ADD IN LAYOUT INSTEAD
import Navbar from "./components/Navbar";
import Home from "./components/Home";
//TODO END


// TODO ADD IN ROUTES INSTEAD
// import Login from './components/Login'
// import Login from "./components/Login";
// import SignUp from "./components/SignUp";
// import SignUp2 from "./components/SignUp2";
//TODO END

import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import AdminLayout from "./layout/AdminLayout";
import UserLayout from "./layout/UserLayout";
import LeadsLayout from "./layout/LeadsLayout";
import RoutesConfig from "./routes"
library.add(fas);
// Import the NextPage component

function App() {
  return (
    <Router>
      <Routes>
        {RoutesConfig.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <>
                {route.layout === "adminLayout" && (
                  <AdminLayout>
                    <route.view />
                  </AdminLayout>
                )}
                {route.layout === "leadsLayout" && (
                  <LeadsLayout>
                    <route.view />
                  </LeadsLayout>
                )}
                {(route.layout === "userLayout" || !route.layout) && (
                  <UserLayout>
                    <route.view />
                  </UserLayout>
                )}
              </>
            }
          />
        ))}
      </Routes>
    </Router>
  );
}
//  {/* <Router>
//       <div className="App">
//         <Navbar />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/signup" element={<SignUp />} />
//           <Route path="/signup2" element={<SignUp2 />} />
//         </Routes>
//       </div>
//     </Router> */}

export default App;
