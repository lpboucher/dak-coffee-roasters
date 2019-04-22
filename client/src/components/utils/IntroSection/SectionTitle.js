import React, { Fragment } from 'react';
import styled from 'styled-components';

const SubTitle = styled.h4`
    font-weight: lighter;
`

const Title = styled.h3`
`

const TitleContainer = styled.div`
    grid-area: title;
    text-transform: uppercase;
    padding: 1rem 0;

    & > * {
        padding: 0.5rem 0;
    }
`

//component should be placed within a grid with area named title
const SectionTitle = ({title, subtitle}) => {
    return (
        <Fragment>
            <TitleContainer>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </TitleContainer>
        </Fragment>
    );
};

export default SectionTitle;
