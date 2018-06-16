const mongoose = require('mongoose'),
Product = mongoose.model('Product');
module.exports = {

    index: function(req, res){
        Product.find({}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data});
            }
        })
    },

    show: function(req, res){
        Product.find({_id: req.params.id}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data});
            }
        })
    },

    create: function(req, res){
        Product.create(req.body, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data});
            }
        })
    },

    update: function(req, res){
        Product.update({_id: req.params.id}, {$set: req.body}, {runValidators: true}, function(err, data){
            if(err){
                console.log({err});
                res.json({'errors': err});
            }else{
                console.log({err});
                res.json({'message': 'success', data});
            }
        })
    },
    
    destroy: function(req, res){
        Product.remove({_id: req.params.id}, function(err, data){
            if(err){
                res.json({'errors': err});
            }else{
                res.json({'message': 'success', data})
            }
        })
    }
}