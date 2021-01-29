// Output a promt
const pwd = require('./pwd');
const ls = require('./ls');
const cat = require('./cat');

process.stdout.write('promp > ');

// The stdin 'data' event files after user types a line
process.stdin.on('data', (data) => {
    const cmd = data.toString().trim().split(' '); // remove the newline
    if (cmd[0] === 'pwd') {
        pwd();
    } else if (cmd[0] === 'ls') {
        ls();
    } else if (cmd[0] === 'cat') {
        cat(cmd[1]);
    }
});