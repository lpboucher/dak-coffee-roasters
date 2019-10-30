import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToNewsletter } from '../../../ducks/user';
import { getError } from '../../../ducks/views';

import NewsletterFull from '../../presentational/Newsletter/NewsletterFull';

class NewsletterContainer extends Component {

    render() {
        return (
            <NewsletterFull  message={this.props.message.newsletter} add={this.props.addToNewsletter}/>      
        );
    }
}

function mapStateToProps(state) {
    return {
        message: getError(state)
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addToNewsletter: (name, email, language) => dispatch(addToNewsletter(name, email, language)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsletterContainer);