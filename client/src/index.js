import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from './components/utils/Routes/ScrollToTop';
import { createStore, applyMiddleware } from 'redux';
import {responsiveStoreEnhancer} from 'redux-responsive'
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import {StripeProvider} from 'react-stripe-elements';
import { I18nextProvider } from "react-i18next";
import LogRocket from 'logrocket';

import i18n from './i18n';

import reducers from './reducers';
import App from './App';

if (process.env.NODE_ENV !== 'development') {
    LogRocket.init('3khpto/dak-coffee-roasters');
}

const store = createStore(reducers, {}, composeWithDevTools(responsiveStoreEnhancer, applyMiddleware(reduxThunk, LogRocket.reduxMiddleware())));

ReactDOM.render(
<Provider store={store}>
    <Router>
        <ScrollToTop>
            <I18nextProvider i18n={i18n}>
                <StripeProvider apiKey="pk_live_bObiLAib996G72J4fUx8qbHp">
                    <App />
                </StripeProvider>
            </I18nextProvider>
        </ScrollToTop>
    </Router>
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
