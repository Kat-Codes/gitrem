const inquirer = require("inquirer");
const { readFile } = require("./file")


exports.readAll = () => {
    const data = readFile();

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
            console.log("Oops! Something went wrong");
            console.log(err);
        });
}

exports.readOne = (title) => {
    const data = readFile();

    data.forEach(line => {
        line = JSON.parse(line);
        if (line.title === title) {
            console.log(title)
            delete line.title;

            for (command in line) {
                console.log("-", command);
            }
        }
    });
}