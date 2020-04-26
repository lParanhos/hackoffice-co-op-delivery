const { Router } = require("express");
const { listCompras, getCompra, addCompra, updateCompra, validatePostParams } = require("../../services/compras");

// Adding this to test out FE loading screens, whenever needed
const delay = (callback) => {
    setTimeout(callback, 1000);
}

module.exports = (app) => {
    const route = Router();

    app.use("/compras", route);

    route.get('/', (req, res) => res.send(listCompras()));
    route.get('/:id', (req, res) => res.send(getCompra(req, res)));

    route.post('/', validatePostParams(), addCompra);
    route.put('/:id', (req, res) => res.send(updateCompra(req, res)));
}
