import React from "react";
import BurgerKit from "../../../components/BurgerBuilder/BurgerKit/BurgerKit";
import Button from "../../../components/UI/Button/Button";
import classes from "./CheckoutSummary.module.css";

export default ({ price, ingredients, checkoutCancel, checkoutContinue }) => {
  return (
    <div className={classes.CheckoutSummary}>
      <BurgerKit price={price} ingredients={ingredients} />
      <Button click={checkoutCancel} red>
        Cancel
      </Button>
      <Button click={checkoutContinue} green>
        Continue
      </Button>
    </div>
  );
};