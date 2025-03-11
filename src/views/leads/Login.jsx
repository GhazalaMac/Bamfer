// import React from "react";

// const Login = () => {
//   const handleSignIn = (event) => {};

//   return (
//     <div className="sign-in-page">
//       <div className="content">
//         <img src="../images/logo-bamfer02 2.png" alt="" className="img-fluid" />
//         <div
//           className="login-form"
//           style={{ background: "#FFFFFF", padding: "20px", margin: "20px" }}
//         >
//           <h2 style={{ textAlign: "center", fontSize: "24px", margin: "10px" }}>
//             LOGIN
//           </h2>
//           <p
//             style={{
//               color: "#4C4C4C",
//               textAlign: "center",
//               fontSize: "18px",
//               margin: "0 0 10px 0",
//             }}
//           >
//             Acces to our Dashboard
//           </p>
//           <form onSubmit={handleSignIn}>
//             <label style={{ color: "#4C4C4C", fontSize: "16px", lineHeight: "19.5px" }}>
//               Email Address
//             </label>
//             <br />
//             <input
//               type="email"
//               placeholder=""
//               required
//               style={{
//                 fontSize: "12px",
//                 padding: "10px",
//                 margin: "5px 0 20px 0",
//                 width: "400px",
//                 color: "#D1D1D1",
//                 border: "1px solid #DDDDDD",
//                 borderRadius: "4px"
//               }}
//             />
//             <br />
//             <div>
//               <div
//                 style={{
//                   display: "flex",
//                   flexDirection: "row",
//                   justifyContent: "space-between",
//                 }}
//               >
//                 <label style={{ color: "#4C4C4C", fontSize: "16px",lineHeight: "19.5px" }}>
//                   Password
//                 </label>
//                 <span style={{ fontWeight: "bold" }}>
//                   <a
//                     href="/reset-password"
//                     style={{
//                       color: " #8E8E8E",
//                       fontSize: "14px",
//                       fontWeight: "400",

//                     }}
//                   >
//                     Forgot Password?
//                   </a>
//                 </span>
//               </div>

//               <input
//                 type="password"
//                 placeholder=""
//                 required
//                 style={{
//                   fontSize: "12px",
//                   padding: "10px",
//                   margin: "5px 0 10px 0",
//                   width: "400px",
//                   border: "1px solid #DDDDDD",
//                   borderRadius: "4px"
//                 }}
//               />
//             </div>

//             <button
//               type="submit"
//               style={{
//                 fontSize: "20px",
//                 padding: "10px",
//                 margin: "20px 0 0 0",
//                 width: "420px",
//               }}
//             >
//               Login
//             </button>
//             <p style={{ fontSize: "12px", textAlign: "center" }}>
//               Don’t have an account?{" "}
//               <a
//                 href="/signup"
//                 style={{
//                   color: " #184CA2 ",
//                   paddingLeft: "2px",
//                   fontWeight: "bold",
//                 }}
//               >
//                 Register
//               </a>
//             </p>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSignIn = (event) => {};

  return (
    <div className="flex h-screen">
      <div className="flex-1 flex flex-col items-center justify-center bg-gray-200">
        <img
          src="../images/logo-bamfer02 2.png"
          alt=""
          className="w-96 h-9 top-24 mb-8 "
        />
        <div className="py-6 px-4 bg-white rounded w-480 h-457">
        <h2 className="text-2xl font-bold text-center mb-4 ">
            LOGIN
          </h2>
          <h2 className="text-center mb-4 text-[#4C4C4C] text-sm">
            Access to our Dashboard
          </h2>
          <form onSubmit={handleSignIn} className="">
            <label className="block text-[#4C4C4C] mt-6 text-xs mb-2">E-mail Address</label>
            <input
              type="email"
              required
              className="w-96 px-4 py-2 text-sm border border-gray-300 rounded"
            />
            <div className="flex  justify-between mt-6 text-xs">
              <label className="block text-[#4C4C4C] mb-2">Password</label>
              <span className="">
                <a href="/reset-password" className="text-[#8E8E8E] text-xs mb-2">
                  Forgot Password?
                </a>
              </span>
            </div>
            <div className="relative w-96">
              <input
                type={showPassword ? "text" : "password"}
                required
                className="w-full px-4 py-2 text-sm border border-gray-300 rounded"
              />
               <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
              <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                className="text-gray-400 cursor-pointer"
                onClick={handleTogglePassword}
              />
            </div>
            </div>

            <button
              type="submit"
              className="w-96 bg-[#184CA2] text-white text-lg font-bold py-2 rounded my-4"
            >
              <a href="/leads/dashboard">Login</a>
            </button>
            <p className="text-sm text-center">
              Don’t have an account yet?{" "}
              <a href="/leads/signup" className="text-[#184CA2] font-semi-bold">
               Register
              </a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
