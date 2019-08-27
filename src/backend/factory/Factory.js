var db = require('../db');

var Factory = {
    getfactories: function(callback)
    {
        return db.query('SELECT * from factory', callback);
    },
    createfactory: function (Factory, callback) {
        return db.query('Insert into factory(id, name, subbusiness, shift1, shift2, shift3) values(?, ?, ?, ?,?)',[Etudiant.matricule, Etudiant.nom, Etudiant.prenom], callback);
    }
}

module.exports = Factory;