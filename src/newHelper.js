const inquirer = require("inquirer");

let i = 1;

exports.newHelper = () => {
    console.log("ello")

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
            console.log("Oops! Something went wrong");
            console.log(err);
        });
};

const commandLoop = (answers) => {
    inquirer
        .prompt([
            {
                name: 'command',
                message: 'Enter another command (submit empty string to finish)',
                type: 'input'
            }
        ])
        .then((command) => {
            if (command.command !== '') {
                const title = "command" + i;
                answers[title] = command.command;
                i++;
                console.log("i", i)
                commandLoop(answers);
            } else {
                saveElements(answers);
            }
        })
        .catch((err) => {
            console.log("Oops! Something went wrong");
            console.log(err);
        });
};

const saveElements = (answers) => {
    const title = answers.title;
    delete answers.title;
}