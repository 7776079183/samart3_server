const sizeMdl = require('../_models/product_size-mdl');
module.exports = {
    addProductSize:function(request,response){
        try {
            var size = new sizeMdl({
                size:request.body.size
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

    getProductSize:function(request,response){
        try {
            return new Promise((resolve,reject)=>{
                sizeMdl.find((error,data)=>{
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