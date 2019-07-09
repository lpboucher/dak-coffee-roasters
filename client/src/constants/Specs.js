import React from 'react';
import { Java, Tasks, Money, Plan, Bar } from 'grommet-icons';

export const ALL_SUBS_SPECS = [
    {
        title: 'free shipping in EU & North America',
        description: 'on all monthly subscriptions',
        icon: 'fa-truck',
    },
    {
        title: 'choose your custom monthly subscription',
        description: 'between our classics or the roaster\'s choice',
        icon: 'fa-mug-hot',
    },
    {
        title: 'commitment-free',
        description: 'skip a month, cancel or change your subscription preferences at no extra cost',
        icon: 'fa-calendar-alt',
    },
]

export const SUBS_SPECS = [
    {
        slug: 'classics-subscription',
        data: [
            {
                text: 'Freshly-roasted specialty coffee',
                icon: <Java />,
            },
            {
                text: 'Customize your order by choosing your roast styles and quantity',
                icon: <Tasks />,
            },
            {
                text: 'Save money compared to single orders',
                icon: <Money />,
            },
            {
                text: 'Receive your coffee box once a month',
                icon: <Plan />,
            },
        ],
    },
    {
        slug:'roaster-subscription', 
        data: [
            {
                text: 'Freshly-roasted specialty coffee',
                icon: <Java />,
            },
            {
                text: 'Get 2 coffee varieties: the current limited edition & what the roaster drinks that month',
                icon: <Bar />,
            },
            {
                text: 'Save money compared to single orders',
                icon: <Money />,
            },
            {
                text: 'Receive your coffee box once a month',
                icon: <Plan />,
            },
        ],
    }
]