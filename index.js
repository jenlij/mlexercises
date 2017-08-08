const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR;

const csvFilePath = 'advertising.csv';
let csvData = [],
    X = [],
    y = [];

let regressionModel;

