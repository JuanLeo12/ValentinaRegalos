const homeController = {};

homeController.list = (req, res) => {
    res.render("home");
};

module.exports = homeController;