import React, { useState,useEffect} from "react";
import { useHistory } from "react-router-dom";
import axios from "../axios";
import BurgerKit from "../components/BurgerBuilder/BurgerKit/BurgerKit";
import Modal from "../components/UI/Modal/Modal";
import OrderSummary from "../components/BurgerBuilder/OrderSummary/OrderSummary";
import Loading from "../components/UI/Loading/Loading";
import withErrorHandler from "../hoc/withErrorHandler";
import classes from "./BurgerBuilder.module.css";
import { useSelector,useDispatch } from "react-redux";
import BurgerControls from "../components/BurgerBuilder/BurgerControls/BurgerControls";
import { load } from "../Store/actions/builder";

export default withErrorHandler(() => {
  const { ingredients, price } = useSelector((state) => state);
  const [isOrdering, setIsOrdering] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  
  useEffect(() => {
   load(dispatch);
  }, [dispatch]);

  let output = <Loading />;
  if (ingredients) {
    const canOrder = Object.values(ingredients).reduce((canOrder, ingredient) => {
      return !canOrder ? ingredient.quantity > 0 : canOrder;
    }, false);
    output = (
      <>
        <BurgerKit price={price} ingredients={ingredients} />
        <BurgerControls
          startOrder={() => setIsOrdering(true)}
          canOrder={canOrder}
          ingredients={ingredients}
        />
          <Modal show={isOrdering} hideCallback={() => setIsOrdering(false)}>
          <OrderSummary
            ingredients={ingredients}
            finishOrder={() => history.push("/checkout")}
            cancelOrder={() => setIsOrdering(false)}
            price={price}
            />
        </Modal>
      </>
    );
  }

 

  return (
    <div className={classes.BurgerBuilder}>
      {output}
      
    </div>
  );
}, axios);