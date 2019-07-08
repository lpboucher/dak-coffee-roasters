import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import { Grommet } from 'grommet';
import { DakTheme } from './theme';
import './App.css';

import Navbar from './components/presentational/Navbar/Navbar';
import HomePage from './components/pages/Home/Home';
import ShopPage from './components/pages/Shop/Shop';
import SubscriptionPage from './components/pages/Subscription/Subscription';
import AboutPage from './components/pages/About/About';
import WholesalePage from './components/pages/Wholesale/Wholesale';
import ContactPage from './components/pages/Contact/Contact';
import BlogPage from './components/pages/Blog/Blog';

// import Account from './components/container/Account/Account';
import CartContainer from './components/container/Cart/CartContainer';
import CheckoutContainer from './components/container/Checkout/CheckoutContainer';
import ProductDetailsContainer from './components/container/Products/ProductDetailsContainer';

class App extends Component {
  render() {
    return (
      <Grommet theme={DakTheme}>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/subscriptions" component={SubscriptionPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/wholesale" component={WholesalePage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blog" component={BlogPage} />
          {/* <Route path="/account" component={Account} /> */}
          <Route path="/cart" component={CartContainer} />
          <Route path="/checkout" component={CheckoutContainer} />
          <Route path="/shop/:slug" component={ProductDetailsContainer} />
          <Route path="/shop" component={ShopPage} />
        </Switch>
      </Grommet>
    );
  }
}

export default App;
