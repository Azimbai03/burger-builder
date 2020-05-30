import React from "react";
import classes from "./BurgerControls.module.css";
import BurgerControl from "./BurgerControl/BurgerControl";
import Button from "../../UI/Button/Button"
const CONTROLS = [
  { label: "Cheese", type: "chees" },
  { label: "Steak", type: "steak" },
 { label: "Tomato", type: "tamato" },
  { label: "Lettuce", type: "lettuce" },
  { label: "onion", type: "onion" },
  { label: "kettchup", type: "kettchup" },
 
];

export default ({ canOrder, ingredients, startOrder }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <BurgerControl
      key={control.type}
      control={control}
      disabled={ingredients[control.type] === 0}
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