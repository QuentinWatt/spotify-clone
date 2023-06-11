import React from "react";
import { Outlet } from "react-router-dom";
import SideNavigation from "../components/sideNavigation/SideNavigation";
import Player from "../components/player/Player";

const Layout: React.FC = () => {
  return (
    <div className="bg-dark-900 min-h-screen flex text-white">
      <SideNavigation />
      <Outlet />
      <Player />
    </div>
  );
};

export default Layout;
