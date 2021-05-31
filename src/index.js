#!/usr/bin/env node
const { newHelper } = require('./newHelper');
const { readAll } = require('./readHelper');
const { errorlog, log } = require('./utils/logs');
  
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

    log(usageText)
}

if (args.length > 3) {
    errorlog(`only one argument can be accepted`)
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
        errorlog('invalid command passed')
        usage()
}
