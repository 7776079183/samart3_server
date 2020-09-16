const sizeCategory = require('../_models/product_category-mdl');
module.exports = {
    addProductCategory:function(request,response){
        try {
            var size = new sizeCategory({
                category:request.body.category
            });
            return new Promise((resolve,reject)=>{
                size.save((error,data)=>{
                    if(!error){
                        resolve(data);
                    }else{
                        reject(error);
                    }
                });
            }).then((data)=>{
                response.status(200).send({result:'success',data:data});
            }).catch((error)=>{
                response.status(500).send({result:'fail',error:error});
            })
        } catch (error) {
            response.status(500).send({result:'fail',error:error});
        }
    },

    getProductCategory:function(request,response){
        try {
            return new Promise((resolve,reject)=>{
                sizeCategory.find((error,data)=>{
                    if(!error){
                        resolve(data);
                    }else{
                        reject(error);
                    }
                });
            }).then((data)=>{
                response.status(200).send({result:'success',data:data});
            }).catch((error)=>{
                response.status(500).send({result:'fail',error:error});
            })
        } catch (error) {
            response.status(500).send({result:'fail',error:error});
        }
    },
}