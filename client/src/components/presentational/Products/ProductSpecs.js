import React, { Fragment } from 'react';

import IconedExplanation from '../../utils/IconedExplanation';

import { Grid } from 'grommet';
import { ReactComponent as Leaf} from '../../../assets/icons/noun_Coffee Leaf_1888198.svg';
import { ReactComponent as Bean} from '../../../assets/icons/noun_Coffee Bean_2443900.svg';
import { ReactComponent as Steam} from '../../../assets/icons/noun_Steam_795410.svg';
import { ReactComponent as Cup} from '../../../assets/icons/iconmonstr-coffee-8.svg';
import { ReactComponent as Tag} from '../../../assets/icons/iconmonstr-tag-2.svg';

const ProductSpecs = ({recommendation, process, region, country, tasting_notes}) => {
    return (
        <Fragment>
            <IconedExplanation 
                icon={<Leaf width="36px" />}
                description={"These beans were harvested in the highest of the peralta farms in Nicaragua (Santa Maria de Lourdes)."}
                spacing={{vertical: 'small'}}
                margin={{vertical: "small"}}
                size={"small"}
            />
            <Grid columns="50%" rows="50%">
            <IconedExplanation 
                icon={<Bean height="36px" />}
                description={`${process}`}
                spacing={{vertical: 'small'}}
                margin="none"
                size={"small"}
            />
            <IconedExplanation 
                icon={<Cup width="36px" />}
                description={`Recommended as ${recommendation}`}
                spacing={{vertical: 'small'}}
                margin="none"
                size={"small"}
                />
            <IconedExplanation 
                icon={<Steam width="36px" />}
                description={tasting_notes}
                spacing={{vertical: 'small'}}
                margin="none"
                size={"small"}
            />
            <IconedExplanation 
            icon={<Tag width="36px" />}
            description={"100% recyclable bag, recyclable box"}
            spacing={{vertical: 'small'}}
            margin="none"
            size={"small"}
            />
            </Grid>
        </Fragment>
    );
};

export default ProductSpecs;