import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import PrivateRoute from './components/utils/Routes/PrivateRoute';

import Navbar from './components/presentational/Navbar/Navbar';
import HomePage from './components/pages/Home/Home';
import LoginContainer from './components/container/Account/LoginFormContainer';
import ShopPage from './components/pages/Shop/Shop';
import SubscriptionPage from './components/pages/Subscription/Subscription';
import AboutPage from './components/pages/About/About';
import WholesalePage from './components/pages/Wholesale/Wholesale';
import ContactPage from './components/pages/Contact/Contact';
import BlogPage from './components/pages/Blog/Blog';
import CartPage from './components/pages/Cart/Cart';
import ProductPage from './components/pages/Product/ProductPage';
import CheckoutPage from './components/pages/Checkout/Checkout';

import Account from './components/presentational/Account/Account';

import { Grommet } from 'grommet';
import { DakTheme } from './theme';
import './App.css';


class App extends Component {
  render() {
    return (
      <Grommet theme={DakTheme}>
        {<Navbar></Navbar>}
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginContainer} />
          <Route path="/subscriptions" component={SubscriptionPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/wholesale" component={WholesalePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog" component={BlogPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/checkout" component={CheckoutPage} />
          <Route path="/shop/:slug" component={ProductPage} />
          <Route path="/shop" component={ShopPage} />
          <PrivateRoute path="/account" component={Account} />
        </Switch>
      </Grommet>
    );
  }
}

export default App;
