import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

export default function Sidebar() {
  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src=" https://c8.alamy.com/comp/PF3NWT/desktop-source-code-and-technology-background-developer-or-programer-with-coding-and-programming-wallpaper-by-computer-language-and-source-code-com-PF3NWT.jpg"
          alt=""
        />
        <Avatar className="sidebar__avatar" />
        <h2>Dipesh kuwarbi</h2>
        <h4>dipeshkuwarbi777@gmail.com</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">2,786</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,786</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("react js")}
        {recentItem("Programming")}
        {recentItem("developer")}
        {recentItem("Javascript")}
      </div>
    </div>
  );
}
