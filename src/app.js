const express = require("express");
const path = require("path");
const morgan = require("morgan");
const hbs = require("hbs");


const app = express();
const router = express.Router();

//Importando routes (rutas)
const homeRoutes = require("./routes/home");
const errorRoutes = require("./routes/404");
const productosRoutes = require("./routes/productos");

//Settings
app.set("port", process.env.PORT || 3000);
//Motor de plantillas
hbs.registerPartials(__dirname + "/views/partials", function (err) { });
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

//Middlewares (antes de las peticiones de los usuarios)
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
//app.use(myConnection(mysql, { host: "localhost", user: "root", password: "", port: 3309, database: "gimnasio", multipleStatements: true, }, "single"));

//Static Files
app.use("/", express.static("public"));
app.use("/", express.static(__dirname + "/public"));

//Routers
app.use("/", homeRoutes);
app.use("/", errorRoutes);
app.use("/", productosRoutes);
app.get("*", (req, res) => {
    res.redirect("/404");
});

//Starting the Server
app.listen(app.get("port"), () => {
    console.log("Servidor corriendo en http://localhost:" + (app.get("port")))
    console.log("Presione Ctrl + C para apagar el servidor")
});