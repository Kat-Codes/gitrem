#!/usr/bin/env node
const { deleteOne } = require('./deleteHelper');
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
      list:     used to list all sequences
      get:      used to retrieve your sequence
      delete:   used to delete a sequence
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
    case 'delete':
        deleteOne()
        break
    default:
        errorlog('invalid command passed')
        usage()
}
