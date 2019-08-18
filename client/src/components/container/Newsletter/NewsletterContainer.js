import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToNewsletter } from '../../../ducks/user';

import NewsletterSignUp from '../../presentational/Newsletter/NewsletterSignUp';

class NewsletterContainer extends Component {

    render() {
        return (
            <NewsletterSignUp  add={this.props.addToNewsletter}/>      
        );
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addToNewsletter: (name, email, language) => dispatch(addToNewsletter(name, email, language)),
    };
}

export default connect(null, mapDispatchToProps)(NewsletterContainer);