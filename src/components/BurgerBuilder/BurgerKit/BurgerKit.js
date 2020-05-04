import React from "react";
import Burger from "./Burger/Burger";
import classes from "./BurgerKit.module.css";
import Bulka from "../../Bulka/Bulka"
import BulkaBottom from "../../Bulka/BulkaBottom";
export default ({ price, ingredients }) => {
  let ingredientsOutput = [];

Object.keys(ingredients).forEach((type) => {
 for (let i = 0; i < ingredients[type]; i++) {
 ingredientsOutput.push(<Burger key={type + i} type={type} />);
    }
  });

  return (
    <div className={classes.BurgerKit}>
      <Bulka/>
      <div className={classes.bento}>{ingredientsOutput}</div>
    <BulkaBottom/> 
        </div>
  );
};