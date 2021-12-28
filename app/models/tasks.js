const Sequelize = require('sequelize');
const db = require('../util/database');

const Task = db.define('task', {
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
    status: {
        type: Sequelize.STRING,
        defaultValue: 'Backlog'
    },
    due_date: {
        type: Sequelize.DATE,
        allowNull: false
    },
    created_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    updated_at: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW
    },
    board_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            model: 'boards',
            key: 'id'
        }
    }
});

module.exports = Task;

