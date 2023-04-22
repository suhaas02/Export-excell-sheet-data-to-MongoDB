const csvtojson = require('csvtojson')
const dataUp = require('../models/dataExcel')
function importFile(filePath,file){
    console.log(filePath)
    var arrayToInsert = [];


    csvtojson().fromFile(filePath)
               .then(async(source) => {
        // Fetching the all data from each row
        console.log(source);
        for (var i = 0; i < source.length; i++) {
            console.log(source[i]["name"])
            var singleRow = {
                Name_of_the_Candidate: source[i]["Name_of_the_Candidate"],
                Email: source[i]["Email"],
                // standard: source[i]["standard"],
            };
            console.log(singleRow)
            arrayToInsert.push(singleRow);
        }
        await dataUp.insertMany(arrayToInsert) 
    })}
module.exports = importFile