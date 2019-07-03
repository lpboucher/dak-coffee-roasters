import React from 'react';

import ProductCard from './ProductCard';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CategoryRow = ({cart, title, products}) => {
    return (
        <Container fluid className="p-5">
            <h5 className="text-center h1">{title}</h5>
            <Row style={{height: '300px'}}>
                {products.slice(0,3).map(product => 
                    <Col key={product.product.id} md={4}>
                        <ProductCard
                            addToCart={cart}
                            {...product}
                        />
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default CategoryRow;