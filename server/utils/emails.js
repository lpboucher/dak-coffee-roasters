const SGmail = require('@sendgrid/mail');
const SGclient = require('@sendgrid/client');
const axios = require('axios');

SGmail.setApiKey(process.env.SENDGRID_API_KEY);
SGclient.setApiKey(process.env.SENDGRID_API_KEY);

const newUserEmail = async (email, lang = 'en') => {
    let template;
    if (lang === 'en') {template = 'd-9a6f32390a7a44289a42e180eb679a21'}
    if (lang === 'fr') {template = 'd-a54851fdc9d040c68dc3bd9b3b9c85a4'}
    if (lang === 'nl') {template = 'd-37a03d1cece94df199d7d7d75045d0eb'}
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
    if (lang === 'en') {template = 'd-5e88429b2b964ad7b528b158b108c0ef'}
    if (lang === 'fr') {template = 'd-a3ff6f315a6444beae3899c1449bf569'}
    if (lang === 'nl') {template = 'd-0a39b8f2f01d459f9cae33dae1f18639'}
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
                    price: item.meta.display_price.with_tax.formatted
                }))
            },
        };
        await SGmail.send(msg);
    } catch (err) {
        console.log(err.response.body.errors);
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