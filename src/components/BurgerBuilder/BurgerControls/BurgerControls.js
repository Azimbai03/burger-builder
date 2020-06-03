import React from "react";
import classes from "./BurgerControls.module.css";
import BurgerControl from "./BurgerControl/BurgerControl";
import Button from "../../UI/Button/Button"


export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = Object.keys(ingredients).map((ingredient) => (
    <BurgerControl
    key={ingredient}
    ingredient={ingredient}
    label={ingredients[ingredient].label}
    disabled={ingredients[ingredient].quantity === 0}
    />
  ));

  return (
    <div className={classes.BurgerControls}>
      {controlsOutput}
      <Button click={startOrder} enabled={canOrder}>
        Order
      </Button>
    </div>
  );
};