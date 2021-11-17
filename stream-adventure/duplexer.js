const { spawn } = require('child_process');
const duplexer = require('duplexer2');

module.exports = function(cmd, args){
    let command = spawn(cmd, args);
    return duplexer(command.stdin, command.stdout);
}