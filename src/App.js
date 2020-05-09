import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Burgerbuilder from './conteiners/Burgerbuilder';
import Checkout from './conteiners/Checkout/Checkout';
import { Route, Switch, Redirect } from "react-router-dom";
export default () => {
  return (
    <div className="App">
      <Layout>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/builder" />
          </Route>
          <Route path="/builder">
            <Burgerbuilder />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
        </Switch>
      </Layout>
    </div>
  );
};



