const fs = require('fs');
const path = require('path');
const { v4: uuid } = require('uuid');

function getNotes() {
    const data = fs.readFileSync(path.join(__dirname, "../db/db.json"), 'utf-8',);
    const notes = JSON.parse(data);
    return notes;
}

function createNote(body) {
    const notes = getNotes();
    // Format note
    const note = {
        title: body.title,
        text: body.text,
        id: uuid()
    }
    // Add new note to notes array
    notes.push(note);
    // Overwrite file with new notes array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(notes, null, 2)
    )
    return note;
}

function deleteNote(id) {

    const notes = getNotes();

    // Checks if a note with the matching id exists.
    const index = notes.findIndex(note => note.id == id);
    if (index === -1) {
        console.log(`No note with id: ${id} was found`);
        return;
    }

    const deletedNote = notes[index];
    // Remove note from notes array
    const updatedNotes = notes.filter(note => note.id != id);
    // Overwrite file with new notes array
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(updatedNotes, null, 2)
    )

    return deletedNote;
}

module.exports = { getNotes, createNote, deleteNote };