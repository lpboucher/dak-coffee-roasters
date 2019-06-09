import React from 'react';

import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const NewsletterSignUp = () => {
    return (
        <Container fluid className="py-3 bg-dark text-center text-white">
            <h5 className="py-3">Sign up to our newsletter to receive exclusive coffee promotions, news, stories, tips</h5>
            <Form>
                <Form.Row className="text-left">
                    <Col md={{offset: 2, span: 4}}>
                        <Form.Control className="my-3 bg-dark border-top-0 border-right-0 border-left-0 border-white rounded-0" placeholder="Your first name" />
                        <a className="my-3" href="#">Read our privacy policy</a>
                    </Col>
                    <Col md={{span: 4}}>
                        <Form.Control className="my-3 bg-dark border-top-0 border-right-0 border-left-0 border-white rounded-0" placeholder="Your email address" />
                        <Button variant="outline-light" size="sm">Sign up</Button>
                    </Col>
                </Form.Row>
                </Form>
        </Container>
    );
};

export default NewsletterSignUp;