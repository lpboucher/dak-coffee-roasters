import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToNewsletter } from '../../../ducks/user';
import { getError } from '../../../ducks/views';

import NewsletterSignUp from '../../presentational/Newsletter/NewsletterSignUp';

class NewsletterContainer extends Component {

    render() {
        return (
            <NewsletterSignUp  message={this.props.message} add={this.props.addToNewsletter}/>      
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