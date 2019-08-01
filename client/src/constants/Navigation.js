export const SUB_NAV = [
    { menuText: "shop", link: "/shop", type: "nav", subs: []},
    { menuText: "coffee subscriptions", link: "/subscriptions", type: "nav", subs: []},
    { menuText: "who we are", link: "/about", type: "drop", subs: [
        {label: "Our Coffee", link: "/our-coffee"},
        {label: "About Us", link: "/about"}
    ]},
    { menuText: "wholesale", link: "/wholesale", type: "nav", subs: []},
    { menuText: "get in touch", link: "/contact", type: "nav", subs: []},
    { menuText: "blog", link: "/blog", type: "drop", subs: [
        {label: "Brewing Guides", link: ""},
    ]}
]

export const FOOTER_NAV = [
    { menuText: "shop", link: "/shop"},
    { menuText: "coffee subscription", link: "/subscriptions"},
    { menuText: "about us", link: "/about"},
    { menuText: "wholesale", link: "/wholesale"},
    { menuText: "blog", link: "/blog"},
    { menuText: "FAQ", link: "/"},
    { menuText: "contact us", link: "/contact"},
    { menuText: "giving back", link: "/"},
    { menuText: "shipping", link: "/"},
    { menuText: "terms and conditions", link: "/"},
    { menuText: "privacy policy", link: "/"},
    { menuText: "payment", link: "/"},
]