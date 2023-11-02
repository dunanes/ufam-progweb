const express = require("express");
const router = express.Router();

const mainController = require("../controllers/main");
const areaController = require("../controllers/area");
const cursoController = require("../controllers/curso");

// Main
router.get("/", mainController.index);
router.get("/sobre", mainController.sobre);
router.get("/ui", mainController.ui);
router.get("/game", mainController.game);

// Area
router.get("/area", areaController.index);

// Curso
router.get('/curso' , cursoController.index);
router.get('/curso/read/:id' , cursoController.read);
router.get('/curso/create' , cursoController.create);
router.post('/curso/create' , cursoController.create);
router.get('/curso/update/:id' , cursoController.update);
router.post('/curso/update/:id' , cursoController.update);
router.post('/curso/remove/:id' , cursoController.remove);

module.exports = router;