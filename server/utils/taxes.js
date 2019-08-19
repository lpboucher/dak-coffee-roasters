const Taxjar = require('taxjar');

const client = new Taxjar({
  apiKey: process.env.TAXJAR_API_KEY
});

const addTaxes = async (to, total, shipping, items) => {
    const { country_code, county, postcode } = to;
    const zip = country_code === 'US' || country_code === 'CA' ? postcode : '';
    const state = country_code === 'US' || country_code === 'CA' ? county : '';
    try {
        const taxes = await client.taxForOrder({
            to_country: country_code,
            to_zip: zip,
            to_state: state,
            amount: total / 100,
            shipping: shipping,
            line_items: items.map(item => (
                {
                    id: item.id,
                    quantity: item.quantity,
                    unit_price: item.unit_price.amount / 100,
                    product_tax_code: item.tax_code
                }
            ))
        });
        return taxes
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    addTaxes
}