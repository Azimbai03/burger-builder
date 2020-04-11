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
    <div className={classes.SushiKit}>
      <div className={classes.bento}>{ingredientsOutput}</div>
      <div className={classes.price}>Total price: {price} som</div>
    </div>
  );
};