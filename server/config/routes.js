const path = require('path');
const products = require('../controllers/products.js');
module.exports = function(app){
    app.get('/index', function(req, res){
        products.index(req, res);
    });
    app.get('/show/:id', function(req, res){
        products.show(req, res);
    });
    app.post('/create', function(req, res){
        products.create(req, res);
    });
    app.put('/edit/:id', function(req, res){
        products.update(req, res);
    });
    app.delete('/destroy/:id', function(req, res){
        products.destroy(req, res);
    });
    app.all("*", (req,res,next) => {
        res.sendFile(path.resolve("./angular-app/dist/angular-app/index.html"));
    });
}