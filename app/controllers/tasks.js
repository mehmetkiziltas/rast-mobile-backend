const Tasks = require('../models/tasks');

exports.getAll = async (req, res) => {
    try {
        const tasks = await Tasks.findAll();
        return res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getOne = async (req, res, next) => {
    try {
        const task = await Tasks.findByPk(req.params.id);
        return res.status(200).json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getByBoardId = async (req, res) => {
    try {
        const tasks = await Tasks.findAll({
            where: {
                board_id: req.params.id
            }
        });
        return res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.createOne = async (req, res) => {
    try {
        const TASK_MODEL = {
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            board_id: req.body.board_id
        };
        try {
            const task = await Tasks.create(TASK_MODEL);
            return res.status(201).json(task);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.updateOne = async (req, res) => {
    try {
        const TASK_MODEL = {
            name: req.body.name,
            description: req.body.description,
            status: req.body.status,
            due_date: req.body.due_date,
            board_id: req.body.board_id
        };
        try {
            const task = await Tasks.update(TASK_MODEL, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(201).json(task);
        } catch (error) {
            res.status(500).json({
                message: error.message
            });
        }
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.deleteOne = async (req, res) => {
    try {
        const task = await Tasks.delete({
            where: {
                id: req.params.id
            }
        });
        res.json(task);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};