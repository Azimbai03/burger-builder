import React, { useState, useEffect } from "react";
import axios from "../../axios";
import Order from "../../components/Orders/Order";
import classes from "./Orders.module.css";
import withErrorHandler from "../../hoc/withErrorHandler";
import Loading from "../../components/UI/Loading/Loading";

export default withErrorHandler(() => {
  const [Orders, setOrders] = useState(0);

  useEffect(() => {
    axios
      .get("/Orders.json")
      .then((response) => {
        setOrders(response.data);
      })
      .catch((error) => {});
  }, []);

  let OrdersOutput = <Loading />;
  if (Orders !== null) {
    console.log(Orders);
    OrdersOutput = Object.keys(Orders).map((id) => (
      <Order key={id} {...Orders[id]} />
    ));
  }

  return (
    <div className={classes.Orders}>
      <h1>Orders</h1>
      {OrdersOutput}
    </div>
  );
}, axios);