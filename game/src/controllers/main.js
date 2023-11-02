const index = (req, res) => {
    const conteudo = 'Página principal da aplicação';
    res.render('main/index', {
        conteudo
    });
};

const sobre = (req, res) => {
    res.render('main/sobre');
};

const ui = (req, res) => {
    res.render('main/ui');
};

const game = (req, res) => {
    res.render('main/game');
};

module.exports = { index, sobre, ui, game }