import React, { Fragment } from 'react';

import ProductCard from './ProductCard';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';

const FeaturedProducts = ({products, cart}) => {
    return (
        <Fragment>
            <Container>
                <h1 className="text-center">Coffee bags & equipment</h1>
                <Row style={{height: '600px'}}>
                    <Col>
                        <ProductCard 
                            {...products[0]}
                            addToCart={cart}
                            main
                        />
                    </Col>
                    <Col>
                        <ProductCard 
                                {...products[1]}
                                addToCart={cart}
                            />
                            <ProductCard 
                                {...products[2]}
                                addToCart={cart}
                            />
                    </Col>
                    <Col>
                        <ProductCard 
                                {...products[3]}
                                addToCart={cart}
                            />
                        <ProductCard 
                                {...products[4]}
                                addToCart={cart}
                            />
                    </Col>
                </Row>
                <Button>See More</Button>
            </Container>        
        </Fragment>
    );
};

export default FeaturedProducts;