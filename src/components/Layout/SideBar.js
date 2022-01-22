import React, { useState } from "react";
import classes from "./Sidebar.module.css";
import "./index.css";
import { Link, useRouteMatch } from "react-router-dom";

const SideBar = ({ categoriesMenu }) => {
  const match = useRouteMatch("/:categoryId");

  return (
    <div>
      <div className={classes.sidebar}>
        {categoriesMenu.map((menuItem) => (
          <Link
            className={
              match?.params?.categoryId === menuItem.id.toString()
                ? "active"
                : ""
            }
            to={`/${menuItem.id}`}
            key={menuItem.id}
          >
            {menuItem.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideBar;
