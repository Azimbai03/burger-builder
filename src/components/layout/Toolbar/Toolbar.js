import React from 'react';
import classes from './Toolbar.module.css';
import Logotup from '../../layout/Logo/Logotup';
import Nav from '../../layout/Toolbar/Nav/Nav';
import DrawerToggle from '../Drawer/DrawerToggle/DrawerToggle';

export default ({ toggleDrawer }) =>  (
  <div className={classes.Toolbar}>
    <Logotup />
    <nav>
      <Nav />
    </nav>
    <DrawerToggle toggleDrawer={toggleDrawer} />
  </div>
);
