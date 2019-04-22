import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { fetchCollections, getAllFeaturedProductsData } from '../../../ducks/collections';

import FeaturedProducts from '../../presentational/Products/FeaturedProducts';
import Loader from '../../utils/Loader';

class FeaturedProductsContainer extends Component {
    
    componentDidMount() {
            this.props.fetchCollections();
      };
    
    render() {
        const { featured } = this.props;
        return (
            <Fragment>
                {featured && featured.length ? (
                        <FeaturedProducts products={featured} />
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
        featured: getAllFeaturedProductsData(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        fetchCollections: () => dispatch(fetchCollections()),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(FeaturedProductsContainer);