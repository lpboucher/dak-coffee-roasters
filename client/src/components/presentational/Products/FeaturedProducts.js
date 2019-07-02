import React, { Fragment } from 'react';

import ProductCard from './ProductCard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const FeaturedProducts = ({products, cart}) => {
    return (
        <Fragment>
            <Container fluid className="p-5 bg-light">
                <h1 className="text-center">Coffee bags & equipment</h1>
                <Row style={{height: '600px'}}>
                    <Col md={4} className="py-3">
                        <ProductCard 
                            {...products[0]}
                            addToCart={cart}
                            main
                        />
                    </Col>
                    <Col md={8}>
                        <Row style={{height: '300px'}}>
                            <Col md={6} className="py-3">
                                <ProductCard 
                                        {...products[1]}
                                        addToCart={cart}
                                    />
                            </Col>
                            <Col md={6} className="py-3">
                                <ProductCard 
                                    {...products[2]}
                                    addToCart={cart}
                                />
                            </Col>
                        </Row>
                        <Row style={{height: '300px'}}>
                            <Col md={6} className="py-3">
                                <ProductCard 
                                        {...products[3]}
                                        addToCart={cart}
                                    />
                                </Col>
                                <Col md={6} className="py-3">
                                <ProductCard 
                                        {...products[4]}
                                        addToCart={cart}
                                    />
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="text-center w-25 m-auto">
                    <Button variant="dark" size="lg" className="text-uppercase">See More</Button>
                </div>
            </Container>        
        </Fragment>
    );
};

export default FeaturedProducts;