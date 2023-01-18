const Error404controller = {};

Error404controller.list = (req, res) => {
    res.render("404Error");
};

module.exports = Error404controller;