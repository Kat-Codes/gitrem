#!/usr/bin/env node

const chalk = require('chalk')
const fs = require('fs');
const { newHelper } = require('./newHelper');
const { readAll } = require('./readHelper');
  
const args = process.argv;
  
const usage = () => {
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

const errorLog = (error) => {
    const eLog = chalk.red(error)
    console.log(eLog)
}

if (args.length > 3) {
    errorLog(`only one argument can be accepted`)
    usage()
}

switch (args[2]) {
    case 'help':
        usage()
        break
    case 'new':
        newHelper()
        break
    case 'list':
        readAll()
        break
    default:
        errorLog('invalid command passed')
        usage()
}
