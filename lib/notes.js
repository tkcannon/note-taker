const fs = require('fs');
const path = require('path');

function createNewNote(body, notesArr) {
    const note = body;
    notesArr.push(note);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify([notesArr])
    )
    return note;
}

module.exports = createNewNote;