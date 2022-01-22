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
    const note = {
        title: body.title,
        text: body.text,
        id: uuid()
    }
    notes.push(note);
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
    const updatedNotes = notes.filter(note => note.id != id);
    console.log(updatedNotes);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify(updatedNotes, null, 2)
    )

    return deletedNote;
}

module.exports = { getNotes, createNote, deleteNote };