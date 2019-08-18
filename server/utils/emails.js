const SGmail = require('@sendgrid/mail');
const SGclient = require('@sendgrid/client');
const axios = require('axios');

SGmail.setApiKey(process.env.SENDGRID_API_KEY);
SGclient.setApiKey(process.env.SENDGRID_API_KEY);

const newUserEmail = async (email, lang) => {
    //check user language and send french or english confirm email
    const template = lang === 'fr' ? '' : 'd-9a6f32390a7a44289a42e180eb679a21';
    try {
        const msg = {
            to: email,
            from: 'info@dakcoffeeroasters.com',
            templateId: template,
            dynamic_template_data: {
                user_email: email
            },
        };
        await SGmail.send(msg);
    } catch (err) {
        console.log(err.response.body.errors);
    }
}

const addToNewsletter = async (req, res, next) => {
    const { email, name, language } = req.body;
    try {
        const request = {
            body: [{ email, name }],
            method: 'POST',
            url: '/v3/marketing/contacts'
          };
        await SGclient.request(request);
        /*const add = await axios.put(
            'https://api.sendgrid.com/v3/marketing/contacts',
            { email, name },
            { headers: { Authorization: 'Bearer ' + process.env.SENDGRID_API_KEY } }
        )*/
        //console.log(add);
    } catch(err) {
        console.log(err.response)
    }
}

module.exports = {
    newUserEmail,
    newOrderEmail,
    addToNewsletter
}