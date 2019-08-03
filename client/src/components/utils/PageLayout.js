import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { isProcessing } from '../../ducks/views';

import FullLoader from '../utils/FullLoader';
import Navbar from '../presentational/Navbar/Navbar';
import Footer from '../presentational/Footer/Footer';

class PageLayout extends Component {
    render() {
        const { isProcessing, children } = this.props;
        return (
            <Fragment>
                {isProcessing &&
                    <FullLoader text="Loading your account..."/>
                }
                <Navbar />
                {children}
                <Footer />
            </Fragment>
        );
    }
};

function mapStateToProps(state) {
    return {
        isProcessing: isProcessing(state)
    };
}

export default connect(mapStateToProps, null)(PageLayout);

