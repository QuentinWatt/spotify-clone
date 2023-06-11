import React from "react";
import { Link } from "react-router-dom";

const Playlists: React.FC = () => {
  return (
    <nav className="p-5 h-64 overflow-y-scroll">
      <ul>
        <li>
          <Link to="/">Playlist 1</Link>
        </li>
        <li>
          <Link to="/">Playlist 2</Link>
        </li>
        <li>
          <Link to="/">Playlist 3</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Playlists;
