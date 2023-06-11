import React from "react";
import MainMenu from "./MainMenu";
import Playlists from "./Playlists";

const SideNavigation: React.FC = () => {
  return (
    <div className="bg-black w-72 text-white">
      <MainMenu />
      <Playlists />
      <div className="bg-slate-600 w-full h-64 flex items-center justify-center">
        Current song thumbnail
      </div>
    </div>
  );
};

export default SideNavigation;
