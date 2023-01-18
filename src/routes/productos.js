const express = require("express");
const router = express.Router();

const productosController = require("../controllers/ProductosController");
router.get("/productos", productosController.listaProductos);

module.exports = router;