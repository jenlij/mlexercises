// https://hackernoon.com/machine-learning-with-javascript-part-1-9b97f3ed4fe5
const ml = require('ml-regression');
const csv = require('csvtojson');
const SLR = ml.SLR; //simple linear regression
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout

});
const csvFilePath = 'advertising.csv';
let csvData = [],
    X = [],
    y = [];

let regressionModel;

csv()
    .fromFile(csvFilePath)
    .on('json', (jsonObj) => {
        csvData.push(jsonObj);
    })
    .on('done', () => {
        dressData();
        performRegression();
    });

function dressData() { 
    csvData.forEach((row) => {
        X.push(f(row.Radio));
        y.push(f(row.Sales));
    });
}    

function f(s) { //parse strings to floats
    return parseFloat(s);
}

function performRegression() {
    regressionModel = new SLR(X, y);
    console.log(regressionModel.toString(3));
    predictOutput();
}

function predictOutput() {
    rl.question('Enter input X for prediction: ', (answer) => {
        console.log(`At X = ${answer}, y =  ${regressionModel.predict(parseFloat(answer))}`);
        predictOutput();
    });
}