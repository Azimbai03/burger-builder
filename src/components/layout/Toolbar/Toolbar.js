import React from 'react';
import classes from './Toolbar.module.css';
import Logo from '../Logo/Logo';
import Nav from './Nav/Nav';

export default () =>  (
  <div className={classes.Toolbar}>
    <Logo />
    <Nav />
  </div>
);