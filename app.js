const fs = require('fs');
const yargs = require('yargs');

const notes = require('./notes.js');

const argv = yargs.argv;

var command = argv._[0];

if (command === 'add') {

    var note = notes.addNote(argv.title, argv.body);
    notes.printNoteData(note);

} else if (command === 'remove') {

    var noteRemoved = notes.removeNote(argv.title);
    var message = noteRemoved ? 'Nota cancellata' : 'Nota non trovata';
    console.log(message);

} else if (command === 'list') {

    notes.getAll().forEach(element => { console.log(element); });

} else if (command === 'read') {

    var note = notes.getNote(argv.title);
    notes.printNoteData(note);

} else {
    console.log('Command not recognized');
}
