import React from "react";

const AdminLayout = (props) => {
  return (
    <>
      <main className="admin">
        navigation... add
        {props.children}
      </main>
      footer...
    </>
  );
};

export default AdminLayout;
