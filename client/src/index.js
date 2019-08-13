import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import ScrollToTop from './components/utils/Routes/ScrollToTop';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import * as serviceWorker from './serviceWorker';
import {StripeProvider} from 'react-stripe-elements';
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import dak_en from './translations/en/translations.json';
import dak_fr from './translations/fr/translations.json';
import dak_nl from './translations/nl/translations.json';

import reducers from './reducers';
import App from './App';

i18n.use(LanguageDetector).init({
    interpolation: { escapeValue: false },
    ns: ["dak"],
    defaultNS: "dak",
    fallbackLng: "en",
    resources: {
        en: {
            dak: dak_en
        },
        fr: {
            dak: dak_fr
        },
        nl: {
            dak: dak_nl
        },
    },
});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(reduxThunk)));

ReactDOM.render(
<Provider store={store}>
    <Router>
        <ScrollToTop>
            <I18nextProvider i18n={i18n}>
                <StripeProvider apiKey="pk_test_hN24eKK8d78KlAVlKAcll8eu">
                    <App />
                </StripeProvider>
            </I18nextProvider>
        </ScrollToTop>
    </Router>
</Provider>
, document.getElementById('root'));

serviceWorker.unregister();
