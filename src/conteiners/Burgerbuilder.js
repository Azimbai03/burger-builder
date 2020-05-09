import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import BurgerKit from "../components/BurgerBuilder/BurgerKit/BurgerKit";
import BurgerControls from "../components/BurgerBuilder/BurgerControls/BurgerControls";
import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/BurgerBuilder/OrderSummary/OrderSummary";
import Loading from "../components/UI/Loading/Loading";
import withErrorHandler from "../hoc/withErrorHandler";
import classes from "./BurgerBuilder.module.css";

const PRICES = {
  chees: 8.5,
  steak: 9.5,
 tamato: 10.2,
  lettuce: 11.2,
};

export default withErrorHandler(() => {
  const [ingredients, setIngredients] = useState(null);
  const [price, setPrice] = useState(100);
  const [canOrder, setCanOrder] = useState(false);
  const [isOrdering, setIsOrdering] = useState(false);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

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
    const queryParams = Object.keys(ingredients).map(
      (ingredient) =>
        encodeURIComponent(ingredient) +
        "=" +
        encodeURIComponent(ingredients[ingredient])
    );
    queryParams.push("price=" + encodeURIComponent(price.toFixed(2)));

    history.push({
      pathname: "/checkout",
      search: queryParams.join("&"),
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

  useEffect(() => {
    axios
      .get("/ingredients.json")
      .then((response) => setIngredients(response.data))
      .catch((error) => {});
  }, []);

  let output = <Loading />;
  if (ingredients) {
    output = (
      <>
        <BurgerKit price={price} ingredients={ingredients} />
        <BurgerControls
          startOrder={startOrder}
          canOrder={canOrder}
          ingredients={ingredients}
          addIngredient={addIngredient}
          removeIngredient={removeIngredient}
        />
      </>
    );
  }

  let orderSummary = <Loading />;
  if (isOrdering && !loading) {
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        finishOrder={finishOrder}
        cancelOrder={cancelOrder}
        price={price}
      />
    );
  }

  return (
    <div className={classes.Burgerbuilder}>
      {output}
      <Modal show={isOrdering} hideCallback={cancelOrder}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);