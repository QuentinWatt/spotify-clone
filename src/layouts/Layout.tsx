import React from "react";
import { Outlet } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="bg-dark-900 min-h-screen">
      <Outlet />
    </div>
  );
};

export default Layout;
