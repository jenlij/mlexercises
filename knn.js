const KNN = require('ml-knn');
const csv = require('csvtojson');
const prompt = require('prompt');
let knn;

const csvFilePath = 'iris.csv';
const names = ['sepalLength', 'sepalWidth', 'petalLength', 'petalWidth', 'type']; 

let seperationSize;

let data = [];
let X = [];
let y = [];

let trainingSetX = [];
let trainingSetY = [];
let testSetX = [];
let testSetY = [];



