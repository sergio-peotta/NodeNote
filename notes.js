const fs = require('fs');

var fetchNotes = () => {
    try {
        var notesString = fs.readFileSync('notes-data.json');
        return JSON.parse(notesString);
    } catch (error) {
        return [];
    }
};

var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = function(title, body) {
    var notes = fetchNotes();
    var duplicateNotes = notes.filter((note) => { return note.title === title; });
    if (duplicateNotes.length === 0) {
        notes.push({ title, body });
        saveNotes(notes);
        return notes[notes.length - 1];
    }
};

var removeNote = function(title) {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((note) => { return note.title !== title });
    saveNotes(filteredNotes);
    return notes.length !== filteredNotes.length;
};

var getAll = function() {
    return fetchNotes();
};

var getNote = function(title) {
    var notes = fetchNotes();
    var serchedNote = notes.filter((note) => { return note.title === title });
    if (serchedNote.length > 0) { return serchedNote[0]; }
};

var printNoteData = (note) => {
    if (note) {
        console.log('Nota', note);
    } else {
        console.log('La nota esiste già.');
    }
};

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    getAll: getAll,
    getNote: getNote,
    printNoteData: printNoteData
};