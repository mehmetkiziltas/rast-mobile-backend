const Sequelize = require('sequelize');
const db = require('../util/database');

const Board = db.define('board', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    }
});

Board.associate = (models) => {
    Board.hasMany(models.Task, {
        foreignKey: 'board_id',
        as: 'tasks'
    });
};

module.exports = Board;