const productosController = {};

productosController.listaProductos = (req, res) => {
    res.render("productos");
};
module.exports = productosController;
