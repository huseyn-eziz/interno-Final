import React, { useState } from "react";
import { FiAlignJustify } from "react-icons/fi";
import { NavLink } from "react-router-dom";
import { routes } from "../Routing/Routing";
import "./style.css";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header>
      <div className="container mx-auto">
        <nav className="flex items-center justify-between py-6">
          <div className="logo">
            <img src="/interno.png" alt="" />
          </div>
          <div
            className={`links ${
              showMenu ? "teldesign" : "hidden"
            } gap-10 items-center `}
          >
            {routes.map((route, index) => {
              return <NavLink key={index} to={route.path} className={ ({isActive})=>{
                return isActive ? "text-orange-400 links " : "links"
              }}>
                {route.title}
              </NavLink>;
            })}
          </div>
          <div
            className={`lg:hidden  ${showMenu === "flex" && ""}`}
            onClick={() => setShowMenu(!showMenu)}
          >
            <FiAlignJustify />
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
