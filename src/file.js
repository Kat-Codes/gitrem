const currentWorkingDirectory = args[1].slice(0, -8);

exports.checkFileCreated = () => {
    if (fs.existsSync(currentWorkingDirectory +
        'gitrem.txt') === false) {
        let createStream = fs.createWriteStream('gitrem.txt');
        createStream.end();
    }
}

exports.readFile = () => {
    let data = [];

    // Read the data from file and convert
    // it into string
    const fileData = fs
        .readFileSync(currentWorkingDirectory +
            'gitrem.txt').toString();

    data = fileData.split('\n');
    let filterData = data.filter(function (value) {
        return value !== '';
    });
}