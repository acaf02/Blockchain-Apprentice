const Sequelize = require('sequelize');

const connection = new Sequelize('guiaperguntas','root', 'marianela',{
    host: 'localhost',
    dialect:'mysql'
})

module.exports = connection;