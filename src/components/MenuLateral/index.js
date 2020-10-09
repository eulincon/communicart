import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "../Sidebar/SidebarData";
import './style.css';

const MenuLateral = () => {
    return (
        <div className={`mt-5 col-lg-3 d-none d-lg-inline-block aside-sticky pl-5`}>
            <ul class="nav flex-column h-100 bg-lighter_ shadow p-3">
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={`${item.cName} nav-item`}>
                            <Link to={item.path} className={`nav-link`}>
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

export default MenuLateral;
