const calculateShipping = (country, total, items) => {
    console.log('has subscriptions?', hasRecurring(items))
    if ((total.amount > 5000 && total.currency === "EUR") || 
        (total.amount > 7500 && total.currency === "CAD") ||
        hasRecurring(items)) {
            console.log('free shipping');
            return 0
    } else {
            console.log('shipping not free')
            return country === "US" || country === "CA" ? 7.5 : 3.5; 
    }
}

const hasRecurring = (products) => {
    return products.some(item => item.recurring);
}

module.exports = {
    calculateShipping
}