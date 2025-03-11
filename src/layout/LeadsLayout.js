import React from "react";

const LeadsLayout = (props) => {
  return (
    <>
      <main className="leads">
        {/* navigation leads... */}
        {props.children}
      </main>
      {/* footer... */}
    </>
  );
};

export default LeadsLayout;
