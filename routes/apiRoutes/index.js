const router = require('express').Router();
const { v4: uuid } = require('uuid');

const notes = require('../../db/db.json');
const createNote = require('../../lib/notes.js')

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    note = req.body;
    note.id = uuid();
    createNote(note, notes);
    res.json({ message: 'note created' });
})

module.exports = router;