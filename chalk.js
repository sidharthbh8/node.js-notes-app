const chalk = require('chalk')
const command = process.argv[2];
if (command === 'add')
{
    console.log("Adding Notes!");
}
else if (command === 'remove')
{
    console.log("Removing Notes!");
}
console.log(process.argv);