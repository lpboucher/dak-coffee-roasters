import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import { isProcessing, getProcessingText } from '../../ducks/views';

import FullLoader from '../utils/FullLoader';
import Navbar from '../presentational/Navbar/Navbar';
import Footer from '../presentational/Footer/Footer';

class PageLayout extends Component {
    render() {
        const { processing, children } = this.props;
        return (
            <Fragment>
                {processing.isProcessing &&
                    <FullLoader text={processing.processingText}/>
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
        processing: {
            isProcessing: isProcessing(state),
            processingText: getProcessingText(state),
    },
}
}

export default connect(mapStateToProps, null)(PageLayout);

