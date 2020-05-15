import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./NavigationItem.module.css";


export default ({ children, url }) => (
  <li className={classes.NavigationItem}>
    <NavLink to={url} activeClassName={classes.active} exact>
      {children}
    </NavLink>
  </li>
);