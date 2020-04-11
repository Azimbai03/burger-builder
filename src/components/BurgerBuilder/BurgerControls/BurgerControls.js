import React from "react";
import classes from "./BurgerControls.module.css";
import BurgerControl from "./BurgerControl/BurgerControl";

const CONTROLS = [
  { label: "colbasa", type: "avocadoMaki" },
  { label: "Capusta", type: "avocadoTunaRoll" },
  { label: "kotlety", type: "californiaMaki" },
  { label: "ogures", type: "californiaTunaRoll" },
  { label: "tamato", type: "ikuraMaki" },
  { label: "ketchup", type: "salmonMaki" },
];

export default ({ ingredients, addIngredient, removeIngredient }) => {
  const controlsOutput = CONTROLS.map((control) => (
    <BurgerControl
      key={control.type}
      control={control}
      addIngredient={addIngredient}
      removeIngredient={removeIngredient}
      disabled={ingredients[control.type] === 0}
    />
  ));

  return <div className={classes.BurgerControls}>{controlsOutput}</div>;
};