const inquirer = require('inquirer');
const { readAll } = require('../src/readHelper.js');

let question;

describe('Read helper', () => {
  let backup;

  question = [
    {
      type: 'rawlist',
      name: 'title',
      message: 'Which would you like to read?',
      choices: ['An example title'],
      default: 'An example title'
    },
  ];

  beforeEach(() => {
    backup = inquirer.prompt;
  })

  it('should equal test', () => {
    inquirer.prompt = (question) => Promise.resolve({ title: 'An example title' })

    expect(readAll()).resolves.toEqual({ email: 'some@example.com' });

      // .then(answers => answers.email.should.equal('test'))
  })

  // restore
  afterEach(() => {
    inquirer.prompt = backup
  });
})
