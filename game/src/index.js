const logger = require("morgan");
const express = require("express");
const router = require("./router/routes");
const handlebars = require('express-handlebars');
const sass = require("node-sass-middleware");

require('dotenv').config()
const PORT = process.env.PORT;

// Configurações do express
const app = express();
app.use(router);
app.use(logger("short"));

// SASS
app.use(sass({
    src: `${__dirname}/../public/scss`,
    dest: `${__dirname}/../public/css`,
    debug: true,
    outputStyle: "expanded",
    prefix: "/css",
}));

// Arquivos estáticos
app.use("/css", express.static(`${__dirname}/../public/css`));
app.use("/img", express.static(`${__dirname}/../public/img`));

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