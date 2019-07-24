import React, { Component, Fragment } from 'react';

import ProductDetailsContainer from '../../container/Products/ProductDetailsContainer';
import CategoryRowContainer from '../../container/Products/CategoryRowContainer';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';
import Footer from '../../presentational/Footer/Footer';

class ProductPage extends Component {

    componentDidMount() {}

    render() {
        const { slug } = this.props.match.params;
        return (
            <Fragment>
                <ProductDetailsContainer id={slug}/>
                <CategoryRowContainer name="You may also like" category='coffee-equipment'/>
                <NewsletterSignUp />
                <Footer />
            </Fragment>
        );
    }
}

export default ProductPage;