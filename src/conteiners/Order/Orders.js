import React, { useEffect } from "react";
import axios from "../../axios";
import Order from "../../components/Orders/Order";
import classes from "./Orders.module.css";
import withErorHandler from "../../hoc/withErrorHandler";
import Loading from "../../components/UI/Loading/Loading";
import { load } from "../../Store/actions/orders";
import { useDispatch, useSelector } from "react-redux";

export default withErorHandler(() => {
  const dispatch = useDispatch();
  const { orders } = useSelector(state => state.orders);

  useEffect(() => {
    load(dispatch);
  }, [dispatch]);

  let ordersOutput = <Loading />;
  if (orders) {
    ordersOutput = Object.keys(orders).map((id) => (
      <Order key={id} {...orders[id]} />
    ));
  }
  if (orders === null) {
    ordersOutput = <h3>No orders found</h3>;
  }

  return (
    <div className={classes.Orders}>
      <h1>Orders</h1>
      {ordersOutput}
    </div>
  );
}, axios);