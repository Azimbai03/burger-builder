import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import BurgerKit from "../components/BurgerBuilder/BurgerKit/BurgerKit";
import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/BurgerBuilder/OrderSummary/OrderSummary";
import Loading from "../components/UI/Loading/Loading";
import withErrorHandler from "../hoc/withErrorHandler";
import classes from "./BurgerBuilder.module.css";
import { useSelector } from "react-redux";
import BurgerControls from "../components/BurgerBuilder/BurgerControls/BurgerControls";

export default withErrorHandler(() => {
  const { ingredients, price } = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();

  const canOrder = Object.values(ingredients).reduce((canOrder, number) => {
    return !canOrder ? number > 0 : canOrder;
  }, false);

  /*
  useEffect(() => {
    axios
      .get("/ingredients.json")
      .then((response) => setIngredients(response.data))
      .catch((error) => {});
  }, []);
  */

  let output = <Loading />;
  if (ingredients) {
    output = (
      <>
        <BurgerKit price={price} ingredients={ingredients} />
        <BurgerControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
      </>
    );
  }

  let orderSummary = <Loading />;
  if (isOrdering) {
    orderSummary = (
      <OrderSummary
        ingredients={ingredients}
        finishOrder={() => history.push("/checkout")}
        cancelOrder={() => setIsOrdering(false)}
        price={price}
      />
    );
  }

  return (
    <div className={classes.BurgerBuilder}>
      <h1>Burger builder</h1>
      {output}
      <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
        {orderSummary}
      </Modal>
    </div>
  );
}, axios);