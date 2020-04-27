import React from 'react';
import classes from './Toolbar.module.css';
import Logotup from '../../layout/Logo/Logotup';
import Navigation from '../../layout/Toolbar/Navigation/Navigation';
import DrawerToggle from '../Drawer/DrawerToggle/DrawerToggle';

export default ({ toggleDrawer }) =>  (
  <div className={classes.Toolbar}>
    <Logotup />
    <nav>
      <Navigation />
    </nav>
    <DrawerToggle toggleDrawer={toggleDrawer} />
  </div>
);
