import React from 'react';
import { Switch, Route } from 'react-router-dom';
 
export default (
    <Switch>
        <Route exact path="/" />
        <Route path="/login" />
        <Route path="/subscriptions" />
        <Route path="/about" />
        <Route path="/our-coffee" />
        <Route path="/wholesale" />
        <Route path="/contact" />
        <Route path="/blog" />
        <Route path="/brew" />
        <Route path="/cart" />
        <Route path="/faq" />
        <Route path="/terms" />
        <Route path="/privacy" />
        <Route exact path="/checkout" />
        <Route path="/shop/:slug" />
        <Route path="/shop" />
    </Switch>
);
