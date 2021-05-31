const chalk = require('chalk')

const error = chalk.bold.red;
const colour = chalk.keyword('green');
const title = chalk.bold;

exports.successlog = (text) => {
    console.log(colour(text));
}

exports.infolog = (text) => {
    console.log(text);
}

exports.errorlog = (err) => {
    console.log(error(err));
}

exports.titlelog = (text) => {
    console.log(title(text));
}

exports.loglist = (i, text) => {
    console.log(`${chalk.magenta(i)} ${text}`);
}

exports.log = (text) => {
    console.log(text);
}
