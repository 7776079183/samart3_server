var mongoose = require('mongoose');
var timestamps = require('mongoose-timestamp');

var productMdl = new mongoose.Schema({
  
    name: {
        type: String,
        required:true
    },
    category:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'product-category' 
    },
    price:{
        type: String,
        required:true
    },
    size:{ 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'product-size' 
    },
    stock:{
        type: String,
        required:true
    },
    description:{
        type: String,
        required:true
    }
});
productMdl.plugin(timestamps);
module.exports = mongoose.model('product', productMdl);