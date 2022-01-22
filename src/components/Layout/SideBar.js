import React from "react";
import classes from "./Sidebar.module.css";
import { Link } from "react-router-dom";

const SideBar = ({ categoriesMenu }) => {
  return (
    <div>
      <div className={classes.sidebar}>
        {categoriesMenu.map((menuItem) => (
          <Link className="active" to={`/${menuItem.id}`} key={menuItem.id}>
            {menuItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
