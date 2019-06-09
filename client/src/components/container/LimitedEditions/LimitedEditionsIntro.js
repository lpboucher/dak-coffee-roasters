import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const LimitedEditionsIntro = () => {
    return (
        <Fragment>
            <Container>
                <Row className="align-items-center">
                    <Col md={{span: 7, order: 2}}>
                        <Image src="https://thumbs.dreamstime.com/z/black-bag-packaging-wide-variety-products-clipping-packet-path-wrapper-sweet-snack-milk-powder-coffee-salt-sugar-43471774.jpg" fluid />
                    </Col>
                    <Col className="text-right" md={{span: 5, order: 1}}>
                        <h1>Our Limited Edition</h1>
                        <h2>Caffeine Needed</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button><Link to="/limited">See More</Link></Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default LimitedEditionsIntro;