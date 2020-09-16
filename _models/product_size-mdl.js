var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var productSizeMdl = new mongoose.Schema({
  
    size: {
        type: Number,
        required:true
    },
    
});

productSizeMdl.plugin(timestamps);
module.exports = mongoose.model('product-size', productSizeMdl);