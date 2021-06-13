const inquirer = require("inquirer");
const { writeFile } = require("./utils/file");
const { log } = require("./utils/logs");

let i = 1;

exports.newHelper = () => {
    inquirer
        .prompt([
            {
                name: 'title',
                message: 'What does this set of commands do?',
                type: 'input'
            },
            {
                name: 'command',
                message: 'Enter your first command',
                type: 'input'
            }
        ])
        .then((answers) => {
            commandLoop(answers);
        })
        .catch((err) => {
            errlog("Oops! Something went wrong");
            errlog(err);
        });
};

const commandLoop = (answers) => {
    inquirer
        .prompt([
            {
                name: 'command',
                message: "Enter another command (or 'enter' to finish)",
                type: 'input'
            }
        ])
        .then((command) => {
            if (command.command !== '') {
                const title = "command" + i;
                answers[title] = command.command;
                i++;
                commandLoop(answers);
            } else {
                saveElements(answers);
            }
        })
        .catch((err) => {
            log("Oops! Something went wrong");
            errorlog(err);
        });
};

const saveElements = (answers) => {
    writeFile(JSON.stringify(answers));
    log("Commands saved successfully!")
}