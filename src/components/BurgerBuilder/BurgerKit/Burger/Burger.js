import React from 'react';
import classes from './Burger.module.css';

export default ({ type }) => {
  const burgerClasses = [classes.burger,
  classes[type]];
return (
    <div className={burgerClasses.join(' ')}>
    </div>
  );
 };