const express = require('express');
const router = express.Router();
const projectController = require('../src/app/api/controllers/projects');
router.get('/', projectController.getAll);
router.post('/', projectController.create);
router.get('/:projectId', projectController.getById);
router.put('/:projectId', projectController.updateById);
router.delete('/:projectId', projectController.deleteById);
module.exports = router;