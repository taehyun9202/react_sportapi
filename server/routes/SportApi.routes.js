const Sport = require("../controllers/SportApi.controllers");

module.exports = app => {
    app.get('/api/sport', Sport.getAll);
}