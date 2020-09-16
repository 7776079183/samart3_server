var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');
var productCategoryMdl = new mongoose.Schema({
    category: {
        type: String,
        required:true
    },
    
});

productCategoryMdl.plugin(timestamps);
module.exports = mongoose.model('product-category', productCategoryMdl);

