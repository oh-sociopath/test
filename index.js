const { Worker, isMainThread, workerData } = require('worker_threads');
const fs = require('fs');
const path = require('path');

const csvFiles = fs.readdirSync(path.join(__dirname, './csvDir'));

csvFiles.forEach(file => {
    const workerPath = path.join(__dirname, 'worker.js');
    const csvPath = path.join(__dirname, `csvDir/${file}`);

   if(isMainThread) {
       new Worker(workerPath, {
           workerData: csvPath
       });
   }
});
