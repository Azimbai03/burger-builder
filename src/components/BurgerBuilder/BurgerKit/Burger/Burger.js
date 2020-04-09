import React from 'react';
import classes from './Burger.module.css';

export default ({ type }) => {
  const sushiClasses = [classes.Sushi];

  switch (type) {
    case 'salmonRoll':
      sushiClasses.push(classes.salmonRoll);
      break;

    case 'tunaRoll':
      sushiClasses.push(classes.tunaRoll);
      break;

    case 'maki':
    default:
      sushiClasses.push(classes.maki);
      break;
  }

  return (
    <div className={sushiClasses.join(' ')}>
    </div>
  );
};