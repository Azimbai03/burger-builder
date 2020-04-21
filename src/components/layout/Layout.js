import React, { useState } from "react";
import classes from './Layout.module.css'
import Toolbar from "../../components/layout/Toolbar/Toolbar";
import Drawer from "../../components/layout/Drawer/Drawer";

export default ({ children }) => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  function toggleDrawer() {
    setDrawerOpen(!drawerOpen);
  }

  return (
    <div className={classes.Layout}>
      <Toolbar toggleDrawer={toggleDrawer} />
      <Drawer open={drawerOpen} toggleDrawer={toggleDrawer} />
      <main>{children}</main>
    </div>
  );
};