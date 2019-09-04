var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var deliveries = [{
    id: 1,
    name: "La Portuaria",
    products: ["Pizzeria", "Minuta", "Postres"]
}, {
    id: 2,
    name: "Lo de Marcos",
    products: ["Pizzeria", "Minuta", "Pastas", "Bebidas"]
}, {
    id: 3,
    name: "Aladino",
    products: ["Minuta", "Pastas", "Postres"]
}, {
    id: 4,
    name: "Soda mia",
    products: ["Pizzeria", "Minuta", "Bebidas", "Postres"]
}, {
    id: 5,
    name: "El Zoilo",
    products: ["Bebidas"]
}, {
    id: 6,
    name: "Mejicano",
    products: ["Bebidas", "Minuta", "Pastas", "Postres"]
}, {
    id: 7,
    name: "Las Marias",
    products: ["Pizzeria", "Postres"]
}, {
    id: 8,
    name: "Que rico",
    products: ["Pizzeria", "Minuta", "Postres", "Bebidas", "Pastas"]
}];
var menuList = {
    deliveryid: 0,
    sections: [{
            name: "Pizzeria",
            products: [
                { id: 1, description: "Pizza con muzzarella", price: 180 },
                { id: 2, description: "Pizza con jamon", price: 220 },
                { id: 3, description: "Faina", price: 95 },
            ]
        },
        {
            name: "Minuta",
            products: [
                { id: 4, description: "Milanesa", price: 130 },
                { id: 5, description: "Chivito", price: 440 },
                { id: 6, description: "Papas fritas", price: 95 },
                { id: 7, description: "Pancho", price: 65 },
            ]
        },
        {
            name: "Pastas",
            products: [
                { id: 8, description: "Sorrentinos de jamon", price: 330 },
                { id: 9, description: "Ravioles con tuco", price: 220 },
                { id: 10, description: "Fideos con pesto", price: 95 },
                { id: 11, description: "Canelones de verdura", price: 295 },
                { id: 12, description: "Canelones de carne", price: 295 }
            ]
        },
        {
            name: "Postres",
            products: [
                { id: 13, description: "Flan con dulce de leche", price: 180 },
                { id: 14, description: "Arroz con leche", price: 165 },
                { id: 15, description: "Helado de chocolate", price: 95 },
            ]
        },
        {
            name: "Bebidas",
            products: [
                { id: 16, description: "Coca-cola 1 lt", price: 160 },
                { id: 17, description: "Cerveza Patricia 1 lt", price: 165 },
                { id: 18, description: "Jugo de naranja 500 ml", price: 95 },
            ]
        }
    ]
};
//var users = require('./routes/users');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser())
app.all("/*", function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
});
app.get('/api', function(req, res) {
    res.send(deliveries);
});
app.get('/api/getMenu', function(req, res) {
    var response = {};
    response.deliveryid = req.query.id;
    response.sections = []; //deliveries.find(x => x.id == req.query.id).products;
    deliveries.find(x => x.id == req.query.id).products.
    forEach(element => {
        response.sections.push(
            menuList.sections.find(k => k.name == element));
    });
    res.send(response);
});
app.listen(3000, function() {
    console.log('Nodejs app listening on port 3000')
})