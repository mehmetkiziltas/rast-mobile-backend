const Board = require('../models/boards');

exports.getAll = async (req, res) => {
    try {
        const boards = await Board.findAll();
        return res.status(200).json(boards);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.getOne = async (req, res, next) => {
    try {
        const board = await Board.findByPk(req.params.id);
        return res.status(200).json(board);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};

exports.createOne = async (req, res) => {
    try {
        const BOARD_MODEL = {
            name: req.body.name,
            description: req.body.description,
            created_at: req.body.created_at,
            updated_at: req.body.updated_at
        };
        try {
            const board = await Board.create(BOARD_MODEL);
            return res.status(201).json(board);
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
        const BOARD_MODEL = {
            name: req.body.name,
            description: req.body.description,
            updated_at: req.body.updated_at
        };
        try {
            const board = await Board.update(BOARD_MODEL, {
                where: {
                    id: req.params.id
                }
            });
            return res.status(201).json(board);
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
        const board = await Board.destroy({
            where: {
                id: req.params.id
            }
        });
        return res.status(201).json(board);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
};