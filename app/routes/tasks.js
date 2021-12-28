const controller = require('../controllers/tasks');
const router = require('express').Router();

router
    .get('/', controller.getAll)
    .get('/:id', controller.getOne)
    .get('/boardId/:id', controller.getByBoardId)
    .post('/', controller.createOne)
    .put('/:id', controller.updateOne)
    .delete('/:id', controller.deleteOne);

module.exports = router;