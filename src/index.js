#!/usr/bin/env node

const chalk = require('chalk')
const fs = require('fs');
  
const args = process.argv;
  
// The "index.js" is 8 characters long so -8
// removes last 8 characters
const currentWorkingDirectory = args[1].slice(0, -8);
  
  
if (fs.existsSync(currentWorkingDirectory +
        'todo.txt') === false) {
    let createStream = fs.createWriteStream('githelper.txt');
    createStream.end();
}

const usage = function () {
    const usageText = `
    gitrem lets you save sequences of git commands for easy recall
  
    usage:
      gitrem <command>
  
      commands can be:
  
      new:      used to create a new sequence
      get:      used to retrieve your sequence
      list:     used to list all sequences
      help:     used to print the usage guide
    `

    console.log(usageText)
}

function errorLog(error) {
    const eLog = chalk.red(error)
    console.log(eLog)
}

if (args.length > 3) {
    errorLog(`only one argument can be accepted`)
    usage()
}

function newHelper() {
    const q = chalk.blue('Type in your git commands\n')
}

switch (args[2]) {
    case 'help':
        usage()
        break
    case 'new':
        newHelper()
        break
    case 'get':
        break
    case 'list':
        break
    default:
        errorLog('invalid command passed')
        usage()
}
