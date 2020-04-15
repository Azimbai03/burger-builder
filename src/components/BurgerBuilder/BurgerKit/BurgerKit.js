import React from "react";
import Burger from "./Burger/Burger";
import classes from "./BurgerKit.module.css";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

  Object.keys(ingredients).forEach((type) => {
    for (let i = 0; i < ingredients[type]; i++) {
      ingredientsOutput.push(<Burger key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.BurgerKit}>
      <div className={classes.bento}>{ingredientsOutput}</div>
      <br/>
      <div className={classes.price}>Total price: {price.toFixed(2)} som</div>
    </div>
  );
};