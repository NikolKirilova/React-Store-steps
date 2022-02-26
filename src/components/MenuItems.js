import Dropdown from "./Dropdown";
import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  const onMouseEnter = () => {
    window.innerWidth > 960 && setDropdown(true);
  };
  const onMouseLeave = () => {
    window.innerWidth > 960 && setDropdown(false);
  };
  const onMenuClick = () => {
    if (!dropdown) {
      setDropdown(true);
    }
    // window.innerWidth < 960 && setDropdown((prev) => !prev)
  };
  return (
    <li className="menu-items">
      <Link
        to={items.url}
        aria-expanded={dropdown ? "true" : "false"}
        // onClick={() => setDropdown((prev) => !prev)}
        onClick={onMenuClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >      
        {items.text}
         
        {items.submenu ? (
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        ) : (
          <Link to="/">{items.title}</Link>
        )}
        </Link>
    </li>
  );
};

export default MenuItems;
