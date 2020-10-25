import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import style from "./styles.module.css";

const Sidebar = () => {
  return (
    <div className={`col-md-2 shadow d-inline-block fixed-top m-4 vh-100 ${style.sidebar}`}>
      <ul className="nav flex-column my-3">
        {SidebarData.map((item, index) => {
          return (
            <li key={index} className={`${item.cName} nav-item`}>
              <Link to={item.path} className={`nav-link ${style.nav_link}`}>
                {item.icon}
                <span className="ml-2">{item.title}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
