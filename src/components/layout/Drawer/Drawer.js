import React from 'react';
import Logotup from '../../layout/Logo/Logotup';
import Navigation from '../../layout/Toolbar/Navigation/Navigation';
import Backdrop from '../../UI/Backdrop/Backdrop';
import classes from './Drawer.module.css';

export default ({ toggleDrawer, open }) => {
  const contentClasses = [classes.content];
  contentClasses.push(open ? classes.Open : classes.Closed);

  return (
    <div className={classes.Drawer}>
      <Backdrop hideCallback={toggleDrawer} show={open} />
      <div className={contentClasses.join(' ')}>
        <Logotup />
        <Navigation />
      </div>
    </div>
  );
}