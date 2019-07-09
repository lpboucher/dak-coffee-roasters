import React, { Fragment } from 'react';

import IconedExplanation from '../../utils/IconedExplanation';

import { Box, Heading, Paragraph, Grid } from 'grommet';
import { Grow } from 'grommet-icons';

const ProductDetails = ({id, name, description, price, link, slug, main, addToCart}) => {
    return (
        <Fragment>
            <Box direction="row">
                <Box width="50%">
                    <Box width="100%" height="100%" background={`url(${link.href})`}>
                </Box>
                </Box>
                <Box width="50%">
                    <Heading level="1">{name}</Heading>
                    <Heading level="3">Nueva Segovia, Nicaragua | Espresso Beans</Heading>
                    <Paragraph>The Esperanza is from the region of Nueva Segovia in Nicaragua. You can expect floral, tea-like acidity, brown-sugar tasting notes. This single origin coffee is an Espresso Roast, perfect with milk to balance the acidity.</Paragraph>
                    <Paragraph>{description}</Paragraph>
                    <IconedExplanation 
                        icon={<Grow color="plain" size="large" />}
                        description={"These beans were harvested in the highest of the peralta farms in Nicaragua (Santa Maria de Lourdes)."}
                    />
                    <hr/>
                    <Grid columns="50%" rows="50%">
                    <IconedExplanation 
                        icon={<Grow color="plain" size="large" />}
                        description={"These beans were harvested in the highest of the peralta farms in Nicaragua (Santa Maria de Lourdes)."}
                    />
                    <IconedExplanation 
                    icon={<Grow color="plain" size="large" />}
                    description={"These beans were harvested in the highest of the peralta farms in Nicaragua (Santa Maria de Lourdes)."}
                    />
                    <IconedExplanation 
                        icon={<Grow color="plain" size="large" />}
                        description={"These beans were harvested in the highest of the peralta farms in Nicaragua (Santa Maria de Lourdes)."}
                    />
                    <IconedExplanation 
                    icon={<Grow color="plain" size="large" />}
                    description={"These beans were harvested in the highest of the peralta farms in Nicaragua (Santa Maria de Lourdes)."}
                    />
                    </Grid>
                </Box>
            </Box>
        </Fragment>
    );
};

export default ProductDetails;