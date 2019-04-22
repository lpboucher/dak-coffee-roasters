import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchProducts, getAllProducts, getProductImagesById } from '../../../ducks/products';

import ProductCard from '../../presentational/Products/ProductCard';
import Loader from '../../utils/Loader';

class ProductList extends Component {
    
    componentDidMount() {
            this.props.fetchProducts();
      };
    
    render() {
        const { products, thumbnails } = this.props;
        return (
            <Fragment>
                {products && products.length ? (
                    products.map(product => (
                        <ProductCard 
                            key={product.id}
                            name={product.name}
                            thumbnail={thumbnails[product.relationships.main_image.data.id]}
                        />
                    ))
                    ) : (
                        <Loader />
                    )
                }
            </Fragment>
        );
    }
}

function mapStateToProps(state) {
    return {
        products: getAllProducts(state),
        thumbnails: getProductImagesById(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchProducts: () => dispatch(fetchProducts()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductList);