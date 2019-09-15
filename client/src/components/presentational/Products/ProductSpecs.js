import React from 'react';
import withResponsive from '../../utils/HOCs/WithResponsive';

import IconedExplanation from '../../utils/IconedExplanation';

import { Grid, Box } from 'grommet';
import { ReactComponent as Leaf} from '../../../assets/icons/noun_Coffee Leaf_1888198.svg';
import { ReactComponent as Bean} from '../../../assets/icons/noun_Coffee Bean_2443900.svg';
import { ReactComponent as Steam} from '../../../assets/icons/noun_Steam_795410.svg';
import { ReactComponent as Cup} from '../../../assets/icons/iconmonstr-coffee-8.svg';
import { ReactComponent as Tag} from '../../../assets/icons/iconmonstr-tag-2.svg';

const ProductSpecs = ({recommendation, process, harvest ,altitude, tasting_notes, media}) => {
    const layout = {
        extraSmall: {pad: 'medium', columns: '2', rows: 'auto'},
        small: {columns: '2', rows: 'auto'},
        medium: {columns: '50%', rows: '50%'},
        large: {columns: '50%', rows: '50%'},
        infinity: {columns: '50%', rows: '50%'}
    }
    return (
        <Box pad={layout[media] ? layout[media].pad : 'medium'}>
            <IconedExplanation 
                icon={<Leaf width="36px" />}
                description={harvest}
                spacing={{vertical: 'small'}}
                margin={{vertical: "small"}}
                size={"small"}
            />
            <Grid columns={layout[media] ? layout[media].columns : '100%'} rows={layout[media] ? layout[media].rows : '100%'}>
            <IconedExplanation 
                icon={<Bean height="36px" />}
                description={`${process}, ${altitude}`}
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
        </Box>
    );
};

export default withResponsive(ProductSpecs);