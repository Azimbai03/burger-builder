import React from 'react';
import classes from './Burger.module.css';

export default ({ type }) => {
  const burgerClasses = [classes.burger];

  switch (type) {
    case 'colbasa':
      burgerClasses.push(classes.colbasa);
      break;

    case 'tamato':
      burgerClasses.push(classes.tamato);
      break;

    case 'ogures':
    default:
      burgerClasses.push(classes.ogures);
      break;
  }

  return (
    <div className={burgerClasses.join(' ')}>
    </div>
  );
};