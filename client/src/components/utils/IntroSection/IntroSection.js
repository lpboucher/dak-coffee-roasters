import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.div`
    order: ${props => props.order};
    background-image: url(${props => props.bgImage});
    background-size: cover;
`

const Description = styled.div`
    text-align: ${props => props.align};
`

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;

    & > ${Thumbnail} {
        width: 60%;
        height: 100%;
        min-height: 400px;
    }

    & > ${Description} {
        width: 40%;
    }
`

const IntroSection = ({bgColor, thumb, thumbnailOrder, textAlign, children}) => {
    return (
            <div className={`container ${bgColor}`}>
                <Section>
                    <Thumbnail bgImage={thumb} order={thumbnailOrder} />
                    <Description align={textAlign}>
                        {children}
                    </Description>
                </Section>
            </div>
    );
};

export default IntroSection;