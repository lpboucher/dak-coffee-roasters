import React, { Component, Fragment } from 'react';

import Hero from '../../presentational/Hero/Hero';
import NewsletterSignUp from '../../container/Newsletter/NewsletterSignUp';

class BlogPage extends Component {

    componentDidMount() {}

    render() {
        return (
            <Fragment>
                <Hero />
                <NewsletterSignUp />
            </Fragment>
        );
    }
}

export default BlogPage;