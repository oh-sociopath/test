const path = require('path');
const csv = require('csv-parser')
const fs = require('fs')
const results = [];

function parseCsv(filePath) {
    fs.createReadStream(filePath)
        .pipe(csv())
        .on('data', (data) => results.push(data))
        .on('end', () => {
            // console.log(results);
        });

    // console.log(results);
}

module.exports = parseCsv;
