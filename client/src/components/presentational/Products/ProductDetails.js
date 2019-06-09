import React, { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const ProductDetails = ({id, name, description, price, link, slug, main, addToCart}) => {
    return (
        <Fragment>
            <Container>
                <Row className="align-items-center">
                    <Col md={{span: 7, order: 1}}>
                        <Image src={link.href} fluid />
                    </Col>
                    <Col className="text-right" md={{span: 5, order: 1}}>
                        <h1>{name}</h1>
                        <h2>{slug}</h2>
                        <p>{description}</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        <Button>Add to cart</Button>
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );
};

export default ProductDetails;