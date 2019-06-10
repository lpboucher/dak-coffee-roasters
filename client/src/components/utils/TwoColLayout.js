import React from 'react';
import { Link } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Img from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const TwoColLayout = ({introImage, title, subtitle, undertitle, text, link, inverse}) => {
    return (
        <Container className="text-center p-5 bg-white">
            <Row>
                <Col md={{span: 5, order: inverse ? 2 : 1}} className="d-flex flex-column justify-content-center" >
                    <Img src={introImage} fluid/>
                </Col>
                <Col md={{span: 7, order: inverse ? 1 : 2}} className="d-flex flex-column" >
                    <h1 className="large">{title}</h1>
                    <h2>{subtitle}</h2>
                    <h5>{undertitle}</h5>
                    <p>{text}</p>
                    <div className="flex-grow-1  my-2 d-flex justify-content-start align-items-end">
                        <Button><Link to={link.dest}>{link.text}</Link></Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default TwoColLayout;