import React from "react";
import { Link } from 'react-router-dom';

const Dropdown = ({submenus,dropdown}) => {
    return (
        <ul className={`dropdown ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <li key={index} className="submenu-items">
                    <Link to='/'>{submenu.title}</Link>
                    
                </li>
            ))}
        </ul>
    )
}

export default Dropdown;