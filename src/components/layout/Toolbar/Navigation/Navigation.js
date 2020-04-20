import React from 'react';
import classes from './Navigation.module.css';
import NavigationItem from './NavigationItem/NavigationItem';

export default () => (
  <ul className={classes.Navigation}>
      <NavigationItem url="/" active>Burger Builder</NavigationItem>
    <NavigationItem url="/checkout">Checkout</NavigationItem>
  </ul>
); 