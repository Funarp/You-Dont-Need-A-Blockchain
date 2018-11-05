import React from "react";

export default ({ classes, clickHandle, children }) => (
  <div role="button" className="button" onClick={() => clickHandle()}>
    {children}
  </div>
);
