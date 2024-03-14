const express = require('express');
const noteController = require('../controllers/note');

const router = express.Router();

router.get('/', noteController.getAllNotes);
router.get('/:id', noteController.getByNoteId);
router.patch('/:id', noteController.updateNoteById);
router.post('/', noteController.createNote);
router.delete('/:id', noteController.deleteNote);

module.exports = router;