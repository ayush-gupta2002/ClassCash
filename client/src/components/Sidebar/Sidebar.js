import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

function Sidebar() {
  return (
    <Menu>
      <a className="menu-item" href="/chat">
        Chatroom
      </a>
      <a className="menu-item" href="/chat">
        Pay using ClassCash
      </a>
      <a className="menu-item" href="/chat">
        Leaderboards
      </a>
      <a className="menu-item" href="/chat">
        Timetable
      </a>
      <a className="menu-item" href="/chat">
        My Batch
      </a>
    </Menu>
  );
}

export default Sidebar;
