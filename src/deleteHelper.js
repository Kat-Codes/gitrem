const inquirer = require("inquirer");

const { deleteLine } = require("./utils/file");
const { readFile } = require("./utils/file");
const { errorlog, successlog, log } = require("./utils/logs");

exports.deleteOne = () => {
    const data = readFile();

    if (!data.length) {
        log("No commands to delete")
        return;
    }

    const titles = data.map((line) => {
        line = JSON.parse(line);
        return line.title;
    })

    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'title',
                message: 'Which would you like to delete?',
                choices: [...titles],
                default: titles[0]
            },
        ])
        .then((command) => {
            deleteLine(command.title)
            successlog(`${command.title} deleted!`)
        })
        .catch((err) => {
            errorlog("Oops! Something went wrong");
            errorlog(err);
        });
}