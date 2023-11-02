// Arquivo app/controllers/curso.js
const models = require('../models/index');
const Curso = models.Curso;

async function index(req, res) {
    const cursos = await Curso.findAll();
    res.render('curso/index', {
        cursos: cursos.map(curso => curso.toJSON())
    });
};

async function read(req, res) { };

async function create(req, res) {
    if (req.route.methods.get) {
        res.render('curso/create');
    } else {
        curso = await Curso.create({
            sigla: req.body.sigla,
            nome: req.body.nome,
            descricao: req.body.descricao,
            id_area: req.body.area,
        });
        res.redirect('/curso');
    }
};

async function update(req, res) { };

async function remove(req, res) { };

module.exports = { index, read, create, update, remove }