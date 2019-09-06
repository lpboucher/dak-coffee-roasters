const SGmail = require('@sendgrid/mail');
const SGclient = require('@sendgrid/client');
const axios = require('axios');

SGmail.setApiKey(process.env.SENDGRID_API_KEY);
SGclient.setApiKey(process.env.SENDGRID_API_KEY);

const newUserEmail = async (email, lang = 'en') => {
    let template;
    if (lang === 'en') {template = 'd-fbb4badbed7141419975c20ad2a1c044'}
    if (lang === 'fr') {template = 'd-3e05226157b4458cb1221414602153ad'}
    if (lang === 'nl') {template = 'd-9b27e5734f384bd9bf15d8d3d683cc8b'}
    try {
        const msg = {
            to: email,
            from: {email: 'info@dakcoffeeroasters.com', name: 'Dak Coffee Roasters'},
            templateId: template,
            dynamic_template_data: {
                email: email
            },
        };
        await SGmail.send(msg);
    } catch (err) {
        console.log(err.response.body.errors);
    }
}

const newOrderEmail = async (email, order, lang) => {
    let template;
    if (lang === 'en') {template = 'd-e643c0e35bab4e769b74f0306e3da570'}
    if (lang === 'fr') {template = 'd-d7e68964a2ec4415a0af36b201f164cb'}
    if (lang === 'nl') {template = 'd-24e08859bb0441b1b85eacdd0e2dde95'}
    try {
        const msg = {
            to: email,
            from: {email: 'info@dakcoffeeroasters.com', name: 'Dak Coffee Roasters'},
            templateId: template,
            dynamic_template_data: {
                email: email,
                address: {
                    name: `${order.shipping_address.first_name}, ${order.shipping_address.last_name}`,
                    line1: `${order.shipping_address.line_1}`,
                    city: `${order.shipping_address.city}`,
                    postcode: `${order.shipping_address.postcode}`,
                    country: `${order.shipping_address.country}`
                },
                items: order.items.map(item => ({
                    description: item.name,
                    quantity: item.quantity,
                    price: item.meta.display_price.with_tax.formatted,
                    //image: item.thumb.link.href
                }))
            },
        };
        await SGmail.send(msg);
    } catch (err) {
        console.log(err);
    }
}

const addToNewsletter = async (req, res, next) => {
    const { email, name, language } = req.body;
    const [ first_name, last_name ] = name.split(" ");
    try {
        
        //await SGclient.request(request);
        const add = await axios.put(
            'https://api.sendgrid.com/v3/marketing/contacts',
            { 
                "contacts": [{
                    "email": email,
                    "first_name": first_name,
                    "last_name": last_name
                }]
            },
            { headers: { 'Authorization': 'Bearer ' + process.env.SENDGRID_API_KEY } }
        )
    } catch(err) {
        console.log(err)
    }
}

module.exports = {
    newUserEmail,
    addToNewsletter,
    newOrderEmail
}