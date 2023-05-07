const csvtojson = require('csvtojson')
const dataUp = require('../models/dataExcel')
function importFile(filePath){
    var arrayToInsert = [];
    csvtojson().fromFile(filePath)
               .then(async(source) => {
                console.log(source)
        const existingData = await dataUp.find({}).select("email")
        var emails = new Set()
        if(existingData) emails.add(...existingData)

        source.forEach((ele,i)=>{
            if(!emails.has(source[i]["Email"])){
                emails.add(source[i]["Email"])
                arrayToInsert.push({
                    name: source[i]["Name of the Candidate"],
                    email: source[i]["Email"],
                    mobileNumber: source[i]["Mobile No."],
                    dateBirth: source[i]["Date of Birth"],
                    workExperience: source[i]["Work Experience"],
                    resumeTitle: source[i]["Resume Title"],
                    currentLocation: source[i]["Current Location"],
                    postalAddress: source[i]["Postal Address"],
                    currentEmployer: source[i]["Current Employer"]||"",
                    currentDesignation: source[i]["Current Designation"]||""
                })
            }
        })
        console.log(emails)
        console.log(arrayToInsert)
        await dataUp.insertMany(arrayToInsert) 
    })}

module.exports = importFile