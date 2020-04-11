import React from 'react';
import Toolbar from '../layout/Toolbar/Toolbar ';
import Drawer from './Drawer/Drawer';
import classes from './Layout.module.css'

export default ({ children }) => (
  <div className={classes.Layout}>
    <Toolbar />
    <Drawer />
    {children}
  </div>
);