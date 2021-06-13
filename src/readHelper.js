const inquirer = require("inquirer");
const { readFile } = require("./utils/file");
const { errorlog, titlelog, loglist, log, successlog } = require("./utils/logs");


exports.readAll = () => {
    const data = readFile();

    if (!data.length) {
        log("No commands to read")
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
                message: 'Which would you like to read?',
                choices: [...titles],
                default: titles[0]
            },
        ])
        .then((command) => {
            this.readOne(command.title)
        })
        .catch((err) => {
            errorlog("Oops! Something went wrong");
            errorlog(err);
        });
}

exports.readOne = (title) => {
    const data = readFile();

    data.forEach(line => {
        line = JSON.parse(line);
        if (line.title === title) {
            titlelog(title)
            const length = title.length;
            log("~".repeat(length));

            delete line.title;
            const commands = Object.values(line);

            let i = 1;
            commands.forEach((command) => {
                loglist(i, command);
                i++;
            });
            
            log("~".repeat(length));
        }
    });
}