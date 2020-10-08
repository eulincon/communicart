import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";

import style from "./styles.module.css";

const Sidebar = () => {
    return (
        <div className={`mt-5 col-12 shadow d-inline-block m-4 ${style.sidebar}`}>
            <ul class="nav flex-column my-3">
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
