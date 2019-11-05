import React, { Component, Suspense, lazy} from 'react';
import { connect } from 'react-redux';
import withResponsive from '../../utils/HOCs/WithResponsive';
import { switchDisplayCurrency, getDisplayCurrency } from '../../../ducks/views';

import Hero from '../../presentational/Hero/Hero';
import SubscriptionIntro from '../../presentational/Intros/SubscriptionIntro';
import LimitedEditionsIntro from '../../presentational/Intros/LimitedEditionsIntro';
import Loader from '../../utils/Loader';

const FeaturedProductsContainer = lazy(() => import('../../container/Products/FeaturedProductsContainer'));
const NewsletterContainer = lazy(() => import('../../container/Newsletter/NewsletterContainer'));
const ValuesIntro = lazy(() => import('../../presentational/Intros/ValuesIntro'));
const BrewingIntro = lazy(() => import('../../presentational/Intros/BrewingIntro'));

const header = 'https://res.cloudinary.com/dak-coffee-roasters/image/upload/f_auto,q_auto/v1565896327/Heros/HeaderV2_gujmqi.jpg'

class Home extends Component {
    componentDidMount() {
        fetch('http://ip-api.com/json/')
            .then(response => response.json())
            .then(data => {
                if(data.countryCode === 'US' || data.countryCode === 'CA') {
                    this.props.switchCurrency('CAD')
                }
            });
    }
    
    render() {
        const { media, currency } = this.props;
        return (
            <>
                {(media === "medium" || media === "large" || media === "infinity") &&
                    <Hero
                        bgImage={header}
                        overlay={{
                            text: "hero.home",
                            loc: "bottom-left",
                            width: "100vw",
                            height: "40vh"
                        }}
                    />
                }
                    <SubscriptionIntro currency={currency}/>
                    <LimitedEditionsIntro />
                <Suspense fallback={<Loader />}>
                    <FeaturedProductsContainer collection='featured-products'/>
                    <NewsletterContainer />
                    <ValuesIntro />
                    <BrewingIntro />
                </Suspense>
            </>
        );
    }
}

function mapStateToProps(state) {
    return {
        currency: getDisplayCurrency(state),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        switchCurrency: (currency) => dispatch(switchDisplayCurrency(currency)),
    };
}

export default withResponsive(connect(mapStateToProps, mapDispatchToProps)(Home));