import React from 'react';

import SubscriptionSpecsItem from './SubscriptionSpecsItem';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { ALL_SUBS_SPECS } from '../../../constants/Specs';

const SubscriptionSpecs = () => {
    return (
        <Container fluid className="p-5 bg-light">
            <Row>
                { ALL_SUBS_SPECS.map(spec => 
                    <Col key={spec.icon} md={4} className="text-center">
                        <SubscriptionSpecsItem 
                            icon={spec.icon}
                            header={spec.title}
                            desc={spec.description}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default SubscriptionSpecs;