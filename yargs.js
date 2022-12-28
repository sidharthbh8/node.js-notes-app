const { default: chalk } = require('chalk');
const { command, option, demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js')

yargs.version('1.1.0');
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe:"add a title",
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: " add the body",
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.addNote(argv.title, argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder:{
        title:{
            describe:'note title',
            demandOption: true,
            type:'string'
        }
    },
    handler: function(argv){
        notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe: 'List all the items',
    handler: function () {
        console.log(chalk.yellow(`Your added notes ->`));
        notes.listNote();
    }
})

yargs.command({
    command: 'read',
    describe: 'read through all the items',
    builder:{
        title:{
            describe:"search title",
            demandOption:true,
            type:'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title)
    }
})
yargs.parse();