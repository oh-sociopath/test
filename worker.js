const parseCsv = require('./parseCsv');
const { workerData, parentPort } = require('worker_threads')

console.log("workerData: ", workerData);

parseCsv(workerData);

parentPort.postMessage('Hello from worker!');
