const logger = require("morgan");
const express = require("express");
const router = require("./router/routes");
const handlebars = require('express-handlebars');
const sass = require("node-sass-middleware");
const { Sequelize } = require('sequelize');

require('dotenv').config()
const PORT = process.env.PORT || 3000;

// Configurações do express
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(router);
app.use(logger("short"));

// SASS
app.use(sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    debug: true,
    outputStyle: "compressed",
    prefix: "/css",
}));

// Arquivos estáticos
app.use("/css", express.static(`${__dirname}/../public/css`));
app.use("/img", express.static(`${__dirname}/../public/img`));
app.use("/js", [
    express.static(`${__dirname}/../public/js`),
    express.static(`${__dirname}/../node_modules/bootstrap/dist/js`),
])
app.use("/webfonts", express.static(`${__dirname}/../node_modules/@fortawesome/fontawesome-free/webfonts`));

// Handlebars
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views", `${__dirname}/views`);
app.engine("handlebars", handlebars.engine({
    helpers: require(`${__dirname}/views/helpers/helpers.js`)
}));

// Rodar o aplicativo express
app.listen(PORT, () => {
    console.log(`Express app iniciada na porta ${PORT}.`);
});