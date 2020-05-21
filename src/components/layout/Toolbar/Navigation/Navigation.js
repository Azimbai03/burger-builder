import React from "react";
import NavigationItem from "./NavigationItem/NavigationItem";
import classes from "./Navigation.module.css";

export default () => (
  <ul className={classes.Navigation}>
    <NavigationItem url="/builder">Burger Builder</NavigationItem>
    <NavigationItem url="/Orders">Orders</NavigationItem>
  </ul>
);