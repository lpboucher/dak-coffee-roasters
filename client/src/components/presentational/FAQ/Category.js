import React from 'react';
import { withTranslation } from 'react-i18next';

import SingleQuestion from './SingleQuestion';

import { Accordion } from 'grommet';

const Category = ({category, questions, t}) => {
    return (
    <>
        <Accordion>
        {questions.map(question => 
            <SingleQuestion key={`${category}${question}`} question={t(`${category}.${question}.question`)} answer={t(`${category}.${question}.answer`)}/>
        )}
        </Accordion>
    </>
    );
};

export default withTranslation()(Category);