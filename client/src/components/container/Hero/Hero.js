import React, { Fragment } from 'react';

import Container from 'react-bootstrap/Container';
import Jumbotron from 'react-bootstrap/Jumbotron';

const heroStyle = {
    backgroundImage: `url("https://images.unsplash.com/photo-1497935586351-b67a49e012bf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1651&q=80")`,
    backgroundPosition: 'center center',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    height: '100vh'
}

const Hero = () => {
    return (
        <Fragment>
        <Jumbotron style={heroStyle} fluid className="m-0">
            <Container>
                <h1>Fluid jumbotron</h1>
                <p>
                This is a modified jumbotron that occupies the entire horizontal space of
                its parent.
                </p>
            </Container>
        </Jumbotron>
      </Fragment>
    );
};

export default Hero;