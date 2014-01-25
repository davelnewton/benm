var home = require('../controllers/home'),
    sample = require('../controllers/sample'),
    contacts = require('../controllers/contacts');

module.exports.initialize = function(app) {
    app.get('/', home.index);
    app.get('/sample', sample.index);
    app.get('/api/contacts', contacts.index);
    app.get('/api/contacts/:id', contacts.getById);
    app.post('/api/contacts', contacts.add);
    app.put('/api/contacts', contacts.update);
};
