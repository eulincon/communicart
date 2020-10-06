import React from 'react';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';

import './styles.css';


const Sidebar = () => {
    return (
        <div className="col-md-2 shadow m-5 fixed-top sidebar">
            <ul class="nav flex-column my-3">
                {SidebarData.map((item, index) => {
                    return (
                        <li key={index} className={`${item.cName} nav-item`}>
                            <Link to={item.path} className="nav-link">
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