import React from "react";
import classes from "./BurgerControls.module.css";
import SushiControl from "./BurgerControl/BurgerControl";

const CONTROLS = [
  { label: "Avocado Maki", type: "avocadoMaki" },
  { label: "Avocado Tuna Roll", type: "avocadoTunaRoll" },
  { label: "California Maki", type: "californiaMaki" },
  { label: "California Tuna Roll", type: "californiaTunaRoll" },
  { label: "Ikura Maki", type: "ikuraMaki" },
  { label: "Salmon Maki", type: "salmonMaki" },
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

  return <div className={classes.SushiControls}>{controlsOutput}</div>;
};