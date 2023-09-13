import clsx from "clsx";
import React from "react";
import { NavLink } from "react-router-dom";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col space-y-4 h-screen">
      <NavBar />

      <div className="p-4 h-full">{children}</div>
    </div>
  );
};

const NavBar = () => {
  return (
    <div className="w-full flex space-x-4 px-4 py-2 border-b">
      <span>S</span>

      <NavLink
        to="/"
        className={({ isActive }) => clsx(!isActive && "text-slate-400", isActive && "text-white")}
      >
        <span>Chat</span>
      </NavLink>

      <NavLink
        to="/history"
        className={({ isActive }) => clsx(!isActive && "text-slate-400", isActive && "text-white")}
      >
        <span>History</span>
      </NavLink>

      <NavLink
        to="/settings"
        className={({ isActive }) => clsx(!isActive && "text-slate-400", isActive && "text-white")}
      >
        <span>Settings</span>
      </NavLink>
    </div>
  );
};
