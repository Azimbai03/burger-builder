import React from "react";
import Burger from "./Burger/Burger";
import classes from "./BurgerKit.module.css";
import Bulka from "../../Bulka/Bulka"
import BulkaBottom from "../../Bulka/BulkaBottom";

export default ({ price, ingredients }) => {
  let ingredientsOutput = [];
  Object.keys(ingredients).forEach((ingredient) => {
    for (let i = 0; i < ingredients[ingredient].quantity; i++) {
      ingredientsOutput.push(<Burger key={ingredient + i} type={ingredient} />);
    
 }
  });

  return (
    <div className={classes.BurgerKit}>
      <Bulka/>
      <div className={classes.bento}>{ingredientsOutput}</div>
    <BulkaBottom/> 
    <div className={classes.price}>{price.toFixed(2)} som</div>
        </div>
  );
};