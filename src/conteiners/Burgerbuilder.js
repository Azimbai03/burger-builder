import React, { useState } from "react";
import BurgerKit from "../components/BurgerBuilder/BurgerKit/BurgerKit";
import classes from "./BurgerBuilder.module.css";
import BurgerControls from "../components/BurgerBuilder/BurgerControls/BurgerControls";

import OrderSummary from "../components/BurgerBuilder/OrderSummary/OrderSummary"
import Modal from "../components/UI/Modal/Modal";
const PRICES = {
  steak: 20.5,
  cucumber: 8.10,
  tamato: 7.2,
  lettuce: 10.4,
  chees: 25.38,
  ketchup:14.12,
};
export default () => {
  const [ingredients, setIngredients] = useState({
    steak: 0,
    cucumber: 0,
    tamato: 0,
    lettuce: 0,
    chees: 0,
    ketchup:0,
    
  });
  const [price, setPrice] = useState(40);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);

  function checkCanOrder(ingredients) {
    const total = Object.keys(ingredients).reduce((total, ingredient) => {
      return total + ingredients[ingredient];
    }, 0);
    setCanOrder(total > 0);
  }

  function startOrder() {
    setIsOrdering(true);
  }

  function cancelOrder() {
    setIsOrdering(false);
  }

  function finishOrder() {
    alert("You are on the checkout page!");
  }

  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
    checkCanOrder(newIngredients);

    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }

  function removeIngredient(type) {
    if (ingredients[type] >= 1) {
      const newIngredients = { ...ingredients };
      newIngredients[type]--;
      setIngredients(newIngredients);
      checkCanOrder(newIngredients);

      const newPrice = price - PRICES[type];
      setPrice(newPrice);
    }
  }

  return (
    <div className={classes.BurgerBuilder}>
      <BurgerKit price={price} ingredients={ingredients} />
      <BurgerControls
        startOrder={startOrder}
        canOrder={canOrder}
        ingredients={ingredients}
        addIngredient={addIngredient}
        removeIngredient={removeIngredient}
      />
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        <OrderSummary
          ingredients={ingredients}
          finishOrder={finishOrder}
          cancelOrder={cancelOrder}
          price={price}
        />
      </Modal>
    </div>
  );
};