import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { getProducts, fetchProducts } from '../../ducks/products';
import { getCartItems, fetchCartItems } from '../../ducks/cart';
import { hasError, getError, isProcessing, getProcessingText } from '../../ducks/views';

import FullLoader from '../utils/FullLoader';
import ErrorModal from '../utils/ErrorModal';
import NavContainer from '../container/Navbar/NavContainer';
import Footer from '../presentational/Footer/Footer';

class PageLayout extends Component {
    componentDidMount() {
        const { products, cartItems } = this.props;
        if (products.length < 1) this.props.fetchProducts();
        if (cartItems.length < 1) this.props.fetchCart();
    }

    render() {
        const { processing, error, children } = this.props;
        return (
            <Fragment>
                {error.hasError &&
                    <ErrorModal error={error.errorMsg.global} />
                }
                {processing.isProcessing &&
                    <FullLoader text={processing.processingText} />
                }
                <NavContainer />
                {children}
                <Footer />
            </Fragment>
        );
    }
};

function mapStateToProps(state) {
    return {
        processing: {
            isProcessing: isProcessing(state),
            processingText: getProcessingText(state),
        },
        error: {
            hasError: hasError(state),
            errorMsg: getError(state)
        },
        products: getProducts(state),
        cartItems: getCartItems(state)
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
        fetchCart: () => dispatch(fetchCartItems()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PageLayout);

