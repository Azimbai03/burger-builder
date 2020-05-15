import React, { useState, useEffect } from "react";
import axios from "../axios";
import BurgerKit from "../components/BurgerBuilder/BurgerKit/BurgerKit";
import BurgerControls from "../components/BurgerBuilder/BurgerControls/BurgerControls";
import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/BurgerBuilder/OrderSummary/OrderSummary";
import Loading from "../components/UI/Loading/Loading";
import withErrorHandler from "../hoc/withErrorHandler";
import classes from "./BurgerBuilder.module.css";


const PRICES = {
  chees: 15.38,
  steak: 5.5,
  tamato: 7.2,
  lettuce: 10.4,
  
};
export default () => {
  const [ingredients, setIngredients] = useState({
    chees: 0,
    steak: 0,
   tamato: 0,
    lettuce: 0,
    
   });
  const [price, setPrice] = useState(40);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [loading, setLoading] = useState(false);
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
    const order = {
      ingredients: ingredients,
      price: price,
      delivery: "Fast",
      customer: {
        name: "Bakyt",
        phone: "0700700700",
        address: {
          street: "123 Gebze",
          city: "Karakol",
        },
      },
    };

setLoading(true);
     axios.post("/orders.json", order).then((response) => 
    {setLoading(false);
      setIsOrdering(false);
    });
  }
  function addIngredient(type) {
    const newIngredients = { ...ingredients };
    newIngredients[type]++;
    setIngredients(newIngredients);
    checkCanOrder(newIngredients);
    const newPrice = price + PRICES[type];
    setPrice(newPrice);
  }
  let orderSummary = <Loading/>;
  if (!loading) {
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        finishOrder={finishOrder}
        cancelOrder={cancelOrder}
        price={price}
      />
    );
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
       {orderSummary}
      </Modal>
    </div>
  );
};