import React, { Component, Fragment } from 'react';

import ShopContainer from '../../container/Shop/ShopContainer';
import Footer from '../../presentational/Footer/Footer';

class ShopPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <ShopContainer />
                <Footer />
            </Fragment>
        );
    }
}

export default ShopPage;