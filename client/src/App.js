import React, { Component, Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import Navbar from './components/container/Navbar/Navbar';
import Home from './components/container/Home/Home';
import Shop from './components/container/Shop/Shop';
import SubscriptionDetails from './components/container/Subscriptions/SubscriptionDetails';
import About from './components/container/About/About';
import Wholesale from './components/container/Wholesale/Wholesale';
import Contact from './components/container/Contact/Contact';
import Blog from './components/container/Blog/Blog';
import Account from './components/container/Account/Account';
import Cart from './components/container/Cart/Cart';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/shop" component={Shop} />
          <Route path="/subscriptions" component={SubscriptionDetails} />
          <Route path="/about" component={About} />
          <Route path="/wholesale" component={Wholesale} />
          <Route path="/contact" component={Contact} />
          <Route path="/blog" component={Blog} />
          <Route path="/account" component={Account} />
          <Route path="/cart" component={Cart} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
