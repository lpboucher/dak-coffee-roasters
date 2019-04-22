import React from 'react';
import styled from 'styled-components';

const Thumbnail = styled.div`
    order: ${props => props.order}
    & > img {
        width: 100%;
        object-fit: cover;
    }
`

const Description = styled.div`
    text-align: ${props => props.align};
`

const Section = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    & > ${Thumbnail} {
        width: 60%;
        height: 100%;
    }

    & > ${Description} {
        width: 40%;
    }
`

const IntroSection = ({bgColor, thumb, thumbnailOrder, textAlign, children}) => {
    return (
            <div className={`container ${bgColor}`}>
                <Section>
                    <Thumbnail order={thumbnailOrder}>
                        <img src={thumb} alt=""/>
                    </Thumbnail>
                    <Description align={textAlign}>
                        {children}
                    </Description>
                </Section>
            </div>
    );
};

export default IntroSection;