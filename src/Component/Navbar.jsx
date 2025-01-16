import React from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav className="bg-slate-600 h-20 flex justify-between px-5 items-center text-white">
        <a href="#" className="text-4xl">
          Logo
        </a>
        <ul className="flex [&>li]:mx-4">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="about">About</NavLink>
          </li>
          <li>
            <NavLink to="contact">Contact</NavLink>
          </li>
          <li>
            <NavLink to="signup">Sign Up</NavLink>
          </li>
         
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
