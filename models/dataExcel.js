const mongoose = require('mongoose');
const dataExcelSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    // mobileNumber: {
    //     type: Number,
    //     required: true
    // },
    // dateBirth: {
    //     type: Date,
    //     required: true
    // },
    // // workExperience: {
    // //     type: N
    // // }
    // resumeTitle: {
    //     type: String,
    //     required: true
    // },
    // currentLocation: {
    //     type: String,
    //     required: true
    // },
    // postalAddress: {
    //     type: String,
    //     required: true
    // },
    // currentEmployer: {
    //     type: String,
    //     required: true
    // },
    // currentDesignation: {
    //     type: String,
    //     required: true
    // }
}) 

module.exports = mongoose.model('dataUp',dataExcelSchema);