const currentWorkingDirectory = '';

const fs = require('fs');

exports.checkFileCreated = () => {
    if (fs.existsSync(currentWorkingDirectory +
        'gitrem.txt') === false) {
        let createStream = fs.createWriteStream('gitrem.txt');
        createStream.end();
    }
}

exports.readFile = () => {
    this.checkFileCreated();

    let data = [];

    const fileData = fs
        .readFileSync(currentWorkingDirectory +
            'gitrem.txt').toString();

    data = fileData.split('\n');
    return data.filter(function (value) {
        return value !== '';
    });
}

exports.writeFile = (newSequence) => {  
    this.checkFileCreated();

    const fileData = fs
        .readFileSync(currentWorkingDirectory +
            'gitrem.txt').toString();

    fs.writeFile(
        currentWorkingDirectory + 'gitrem.txt',
        newSequence + '\n' + fileData,

        function(err) {
            if (err) throw err;
        },
    );
}