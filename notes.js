const { default: chalk } = require('chalk');
const fs = require('fs')

const addNote = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })
    if(duplicateNotes.length === 0)
    {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log("Notes added!!");
    }
    else{
        console.log("Title Already Taken!");
    }
}

const saveNotes = (notes) =>{
    const noteData = JSON.stringify(notes) 
    fs.writeFileSync('StoredNotes.json', noteData);
}

const loadNotes = () => {
    try {
        const bufferNote = fs.readFileSync('StoredNotes.json')
        const noteJSON = bufferNote.toString();
        return data = JSON.parse(noteJSON);   
    } catch (error) {
        return []
    }
}

const removeNote = (title) => {
    let run=0
    const notes = loadNotes();
    const notesToKeep = notes.filter(function(note) {
        if(note.title===title)
            run=100000
        else{
            run-=1
        }
       return note.title !== title
    })
    if(run>-1){
        saveNotes(notesToKeep)
        console.log(chalk.green(`${title} : removed`));
    }
    else
    {
        console.log(chalk.red(`no Notes found: 404`));
    }
}

const listNote = () => {
    let Notes = loadNotes();

    Notes.forEach((noteList) => {
        console.log(`${chalk.redBright(noteList.title)}`);
    });
   
}

const readNote = (title) => {
    const notes = loadNotes();

    const searchedNote = notes.find((note) => {
        return note.title === title
    })
    if(searchedNote)
    {   console.log(`${searchedNote.title} :Note Found`);
        console.log(`${searchedNote.body} :Note body`);
    }   
    else{
        console.log(chalk.inverse.red('404: notes Not found'));
    }
}

module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNote: listNote,
    readNote: readNote
}