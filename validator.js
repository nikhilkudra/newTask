const { Validator } = require('node-input-validator');
module.exports = {
    createOrder: async function (dataObj) {
        const v = new Validator(dataObj, {
            order_id: 'required',
            item_name: 'required',
            cost: 'required',
        });
        let matched = await v.check();
        if (!matched) {
            throw (v.errors)
        };
        return true;
    }

}