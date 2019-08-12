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
                icon: <Java style={{margin: '0 20px'}}/>,
            },
            {
                text: 'Customize your order by choosing your roast styles and quantity',
                icon: <Tasks style={{margin: '0 20px'}}/>,
            },
            {
                text: 'Save money compared to single orders',
                icon: <Money style={{margin: '0 20px'}}/>,
            },
            {
                text: 'Receive your coffee box once a month',
                icon: <Plan style={{margin: '0 20px'}}/>,
            },
        ],
    },
    {
        slug:'roasters-subscription', 
        data: [
            {
                text: 'Freshly-roasted specialty coffee',
                icon: <Java style={{margin: '0 20px'}}/>,
            },
            {
                text: 'Get 2 coffee varieties: the current limited edition & what the roaster drinks that month',
                icon: <Bar style={{margin: '0 20px'}}/>,
            },
            {
                text: 'Save money compared to single orders',
                icon: <Money style={{margin: '0 20px'}}/>,
            },
            {
                text: 'Receive your coffee box once a month',
                icon: <Plan style={{margin: '0 20px'}}/>,
            },
        ],
    }
]