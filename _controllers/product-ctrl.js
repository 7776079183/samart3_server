
const product = require('../_models/product-mdl');
const { validationResult } = require('express-validator');
module.exports = {
    addProduct:function(request,response){
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).send({ errors: errors.array() });
            }
            var prod = new product({
                name: request.body.name,
                category:request.body.category,
                price:request.body.price,
                size:request.body.size,
                stock:request.body.stock,
                description:request.body.description
            });
            return new Promise((resolve,reject)=>{
                prod.save((error,data)=>{
                    if(!error){
                        resolve(data);
                    }else{
                        reject(error);
                    }
                });
            }).then((data)=>{
                response.status(200).send({result:'Success',message:"Product Saved Successfully"});
            }).catch((error)=>{
                    response.status(500).send({result:'fail',error:error});
                
            })
        } catch (error) {
            response.status(500).send({result:'fail',error:error});
        }
    },
    updateProduct:function(request,response){
        try {
            const errors = validationResult(request);
            if (!errors.isEmpty()) {
                return response.status(400).send({ errors: errors.array() });
            }
            var prodUpdate = {
                name: request.body.name,
                category:request.body.category,
                price:request.body.price,
                size:request.body.size,
                stock:request.body.stock,
                description:request.body.description
            };
            return new Promise((resolve,reject)=>{
                product.findOneAndUpdate({_id:request.body._id}, prodUpdate, function(error, data) {
                    if(!error){
                        resolve(data);
                    }else{
                        reject(error);
                    }
                });
            }).then((data)=>{
                response.status(200).send({result:'Success',message:"Product Updated Successfully"});
            }).catch((error)=>{
                response.status(500).send({result:'fail',error:error});
            })
        } catch (error) {
            console.log(error)
            response.status(500).send({result:'fail',error:error});
        }
    },

    deleteProduct:function(request,response){
        try {
            if(request.params._id == '' || request.params._id == undefined){
                return response.status(400).send({result:'Fail',message:'_id is required'});
            }
            return new Promise((resolve,reject)=>{
                product.remove({_id:request.params._id}, function(error, data) {
                    if(!error){
                        resolve(data);
                    }else{
                        reject(error);
                    }
                });
            }).then((data)=>{
                if(data.deletedCount){
                    response.status(200).send({result:'Success',message:"Product Deleted Successfully"});
                }else{
                    response.status(500).send({result:'Fail',message:"Product Not Found"});
                }
            }).catch((error)=>{
                response.status(500).send({result:'fail',error:error});
            })
        } catch (error) {
            console.log(error)
            response.status(500).send({result:'fail',error:error});
        }
    },

    getProducts:function(request,response){
        try {
            var condition = {};
            if(request.query._id != undefined){
                condition = {
                    _id:request.query._id
                }
            }
            console.log(condition);
            return new Promise((resolve,reject)=>{
                product.find(condition).populate('category').populate('size').exec( function(error, data) {
                    if(!error){
                        resolve(data);
                    }else{
                        reject(error);
                    }
                });
            }).then((data)=>{
                response.status(200).send(data);
            }).catch((error)=>{
                response.status(500).send({result:'fail',error:error});
            })
        } catch (error) {
            console.log(error)
            response.status(500).send({result:'fail',error:error});
        }
    }

}