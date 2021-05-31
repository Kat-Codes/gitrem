const inquirer = require("inquirer");
const { readFile } = require("./file")


exports.readAll = () => {
    const data = readFile();

    const titles = data.map((line) => {
        line = JSON.parse(line);
        return line.title;
    })
    console.log(titles)

    inquirer
        .prompt([
            {
                type: 'rawlist',
                name: 'readAll',
                message: 'Which would you like to read?',
                choices: [...titles],
              },
        ])
        .then((command) => {

        })
        .catch((err) => {
            console.log("Oops! Something went wrong");
            console.log(err);
        });
}

// exports.readOne = (id) => {}