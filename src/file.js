const homedir = require('os').homedir();
const fs = require('fs');

const directory = homedir + '/.gitrem/';
const file = 'db.txt';
const path = directory + file;

exports.checkFileCreated = () => {
    if (!fs.existsSync(directory)) {
        fs.mkdirSync(directory);
        let createStream = fs.createWriteStream(path);
        createStream.end();
    }
}

exports.readFile = () => {
    this.checkFileCreated();

    let data = [];

    const fileData = fs
        .readFileSync(path).toString();

    data = fileData.split('\n');
    return data.filter(function (value) {
        return value !== '';
    });
}

exports.writeFile = (newSequence) => {  
    this.checkFileCreated();

    const fileData = fs
        .readFileSync(path).toString();

    fs.writeFile(
        path,
        newSequence + '\n' + fileData,

        function(err) {
            if (err) throw err;
        },
    );
}