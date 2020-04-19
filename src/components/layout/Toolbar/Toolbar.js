import React from 'react';
import classes from './Toolbar.module.css';
import Logotup from "../Logo/Logotup";
import Navigation from './Navigation/Navigation';

export default () =>  (
  <div className={classes.Toolbar}>
   <Logotup/>
    <Navigation />
  </div>
);