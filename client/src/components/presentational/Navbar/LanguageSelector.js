import React from 'react';
import { withTranslation } from 'react-i18next';

import { Menu } from 'grommet';

const LanguageSelector = ({i18n}) => {
    const langs = ['en', 'fr', 'nl'].filter(lang => lang !== i18n.language);
    return (
        <Menu
            label={i18n.language}
            items={langs.map(lang => ({ label: lang, onClick: () => i18n.changeLanguage(lang) }))}
            icon={false}
            size="xsmall"
        />
    );
};

export default withTranslation()(LanguageSelector);