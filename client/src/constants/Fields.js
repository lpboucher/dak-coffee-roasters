export const CHECKOUT = [
        {
            group: {
                name: 'shipping method',
                icon: 'fa-box'
            },
            fields: [
                {
                    label: 'choose your country',
                    name: 'country',
                    placeholder: 'country',
                    type: 'select',
                    halfWidth: false
                },
            ]
    },
    {
        group: {
            name: 'create an account',
            icon: 'fa-user'
        },
        fields: [
            {
                label: 'email',
                name: 'email',
                placeholder: 'email',
                type: 'text',
                halfWidth: false
            },
            {
                label: 'password',
                name: 'password',
                placeholder: 'password',
                type: 'text',
                halfWidth: false
            },
        ]
    },
    {
        group: {
            name: 'shipping address',
            icon: 'fa-home'
        },
        fields: [
            {
                label: 'first name',
                name: 'first_name',
                placeholder: 'first name',
                type: 'text',
                halfWidth: true
            },
            {
                label: 'last name',
                name: 'last_name',
                placeholder: 'last name',
                type: 'text',
                halfWidth: true
            },
            {
                label: 'company',
                name: 'company_name',
                placeholder: 'company',
                type: 'text',
                halfWidth: false
            },
            {
                label: 'building, stairs, floor',
                name: 'extension',
                placeholder: 'extension',
                type: 'text',
                halfWidth: false
            },
            {
                label: 'city/town',
                name: 'city',
                placeholder: 'city',
                type: 'text',
                halfWidth: false
            },
            {
                label: 'postal code',
                name: 'postal_code',
                placeholder: 'postal code',
                type: 'text',
                halfWidth: false
            },
            {
                label: 'country',
                name: 'country',
                placeholder: 'country',
                type: 'text',
                halfWidth: false
            },
            {
                label: 'mobile number',
                name: 'phone',
                placeholder: 'number',
                type: 'text',
                halfWidth: false
            },
            {
                label: 'same address for billing',
                name: 'billing_address',
                placeholder: '',
                type: 'checkbox',
                halfWidth: false
            },
        ]
    },
    /*{
        group: {
            name: 'billing address',
            icon: 'fa-address-card'
        }
    },*/
    {
        group: {
            name: 'payment method',
            icon: 'fa-credit-card'
        },
        fields: [
            {
                label: 'cardholder name',
                name: 'card_name',
                placeholder: 'cardholder name',
                type: 'text',
                halfWidth: false
            },
            {
                label: 'card number',
                name: 'card_number',
                placeholder: 'card number',
                type: 'text',
                halfWidth: false
            },
            {
                label: 'expiration date',
                name: 'expiration',
                placeholder: 'mm/yyyy',
                type: 'text',
                halfWidth: false
            },
            {
                label: 'security code',
                name: 'cvc',
                placeholder: 'cvc',
                type: 'text',
                halfWidth: false
            },
        ]
    }
]

export const DELIVERY_OPTIONS = [

]