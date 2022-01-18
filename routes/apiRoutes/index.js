const router = require('express').Router();

const notes = require('../../db/db.json');
const createNote = require('../../lib/notes.js')

router.get('/notes', (req, res) => {
    res.json(notes);
})

router.post('/notes', (req, res) => {
    createNote(req.body, notes);
    res.json({ message: 'note created' });
})

module.exports = router;