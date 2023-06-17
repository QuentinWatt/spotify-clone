import React from "react";
import { Link } from "react-router-dom";

const MainMenu: React.FC = () => {
  return (
    <nav className="border-b border-gray-800 p-5">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/search">Search</Link>
        </li>
        <li>
          <Link to="/library">Your library</Link>
        </li>
      </ul>
      <ul className="mt-5">
        <li>
          <Link to="/">Create a playlist</Link>
        </li>
        <li>
          <Link to="/likes">Liked Songs</Link>
        </li>
      </ul>
    </nav>
  );
};

export default MainMenu;
