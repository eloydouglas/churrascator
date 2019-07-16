const Guest = require("../src/controllers/GuestsController");

module.exports = (app) => {
    app.route('/guests').post(Guest.create);
    app.route('/guests/:id').delete(Guest.delete);
};