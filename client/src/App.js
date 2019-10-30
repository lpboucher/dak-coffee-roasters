import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/utils/Routes/PrivateRoute';

import Layout from './components/utils/PageLayout';

import HomePage from './components/pages/Home/Home';
import LoginPage from './components/pages/Account/Login';
import ShopPage from './components/pages/Shop/Shop';
import SubscriptionPage from './components/pages/Subscription/Subscription';
import CoffeePage from './components/pages/About/Coffee';
import AboutPage from './components/pages/About/About';
import WholesalePage from './components/pages/Wholesale/Wholesale';
import ContactPage from './components/pages/Contact/Contact';
import BlogPage from './components/pages/Blog/Blog';
import BrewPage from './components/pages/Brew/BrewGuides';
import CartPage from './components/pages/Cart/Cart';
import FAQPage from './components/pages/FAQ/FAQ';
import TermsPage from './components/pages/Terms/Terms';
import PrivacyPage from './components/pages/Privacy/Privacy';
import ProductPage from './components/pages/Product/ProductPage';
import CheckoutPage from './components/pages/Checkout/Checkout';
import AccountPage from './components/pages/Account/Account';
import SuccessPage from './components/presentational/Checkout/CheckoutSuccess';
import SubscribePage from './components/pages/Newsletter/Subscribe';

import { Grommet } from 'grommet';
import { DakTheme } from './theme';
import './App.css';


class App extends Component {
  render() {
    return (
      <Grommet theme={DakTheme}>
        <Layout>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/login" component={LoginPage} />
            <Route path="/subscriptions" component={SubscriptionPage} />
            <Route path="/about" component={AboutPage} />
            <Route path="/our-coffee" component={CoffeePage} />
            <Route path="/wholesale" component={WholesalePage} />
            <Route path="/contact" component={ContactPage} />
            <Route path="/blog" component={BlogPage} />
            <Route path="/brew" component={BrewPage} />
            <Route path="/cart" component={CartPage} />
            <Route path="/faq" component={FAQPage} />
            <Route path="/terms" component={TermsPage} />
            <Route path="/privacy" component={PrivacyPage} />
            <Route exact path="/checkout" component={CheckoutPage} />
            <Route 
              path="/shop/:slug" component={ProductPage} />
            <Route path="/shop" component={ShopPage} />
            <Route path="/checkout/success" component={SuccessPage} />
            <Route path="/subscribe" component={SubscribePage} />
            <PrivateRoute path="/account" component={AccountPage} />
          </Switch>
        </Layout>
      </Grommet>
    );
  }
}

export default App;
