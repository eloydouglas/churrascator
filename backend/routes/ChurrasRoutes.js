const Churras = require("../src/controllers/ChurrasController");

module.exports = (app) => {
    app.route('/churras').get(Churras.list);
    app.route('/churras/:id').get(Churras.get);
    app.route('/churras').post(Churras.create);
};