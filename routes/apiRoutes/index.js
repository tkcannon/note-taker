const router = require('express').Router();
const { getNotes, createNote, deleteNote } = require('../../lib/notes.js');

router.get('/notes', (req, res) => {
    notes = getNotes();
    res.json(notes);
})

router.post('/notes', (req, res) => {
    if (!req.body.title || !req.body.text) {
        res.json({ message: 'Missing note data' });
    }

    noteCreated = createNote(req.body);

    res.json({ note: noteCreated });
})

router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const deletedNote = deleteNote(id);

    res.json({ deletedNote: deletedNote });
})

module.exports = router;