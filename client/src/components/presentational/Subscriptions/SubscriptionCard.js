import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import SubscriptionCharacteristicsItem from './SubscriptionCharacteristicsItem';

import { SUBS_SPECS } from '../../../constants/Specs';

const SubscriptionCard = ({product, thumb}) => {
    const spec = SUBS_SPECS.filter(item => item.slug === product.slug)
                            .map(spec => spec.data);
    const productStyles = {
        //background: `url(${thumb.link? thumb.link.href : ""})`,
        background: 'grey',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '200px',
    }
    return (
        <Fragment>
            <Link to={`/shop/`}>
                <div style={productStyles} />
            </Link>
            <div className="flex-grow-1 border p-4">
                <h5>{product.name}</h5>
                <p>{product.description}</p>
                <div className="w-100 d-flex flex-column">
                    { spec[0].map(item => (
                        <SubscriptionCharacteristicsItem key={item.icon} {...item} />
                    ))
                    }
                </div>
                <h3>From XX $</h3>
                <p>(FREE SHIPPING EU + NORTH AMERICA)</p>
            </div>
          </Fragment>
    );
};

export default SubscriptionCard;