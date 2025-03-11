import React from "react";

const UserLayout = (props) => {
  return (
    <>
      <main className="user">
        {/* navigation user... */}
        {props.children}
      </main>
      {/* footer... */}
    </>
  );
};

export default UserLayout;
