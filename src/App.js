import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import BurgerBuilder from './conteiners/Burgerbuilder';

export default () => {
  return (
    <div className="App">
      <Layout>
        <BurgerBuilder />
      </Layout>
    </div>
  );
};



