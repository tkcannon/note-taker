const router = require('express').Router();
const res = require('express/lib/response');
const { getNotes, createNote, deleteNote } = require('../../lib/notes.js');

// Get All Notes
router.get('/notes', (req, res) => {
    notes = getNotes();
    res.json(notes);
})

// Create New Note
router.post('/notes', (req, res) => {
    if (!req.body.title || !req.body.text) {
        res.status(404).json({ message: 'Missing note data' });
        return;
    }

    noteCreated = createNote(req.body);
    res.json({ note: noteCreated });
})

// Delete Note By ID
router.delete('/notes/:id', (req, res) => {
    const id = req.params.id;
    const deletedNote = deleteNote(id);

    if (!deletedNote) {
        res.status(404).json({ message: 'No note found with that id' });
        return;
    }

    res.json({ deletedNote: deletedNote });
})

module.exports = router;