import React from "react";
import classes from "./BurgerControls.module.css";
import BurgerControl from "./BurgerControl/BurgerControl";
import Button from "../../UI/Button/Button"
const CONTROLS = [
  { label: "steak", type: "steak" },
 { label: "tamato", type: "tamato" },
  { label: "lettuce", type: "lettuce" },
  { label: "chees", type: "chees" },
 
];

export default ({
   ingredients, 
  addIngredient, 
  removeIngredient,
  canOrder,
  startOrder,
 }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <BurgerControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
    />
  ));
return <div className={classes.BurgerControls}>
    {controlsOutput}
    <Button click={startOrder} enabled={canOrder}>
      Order
    </Button>
  </div>;
};