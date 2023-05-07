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
    mobileNumber: {
        type: String,
        required: true
    },
    dateBirth: {
        type: String,
        required: true
    },
    workExperience: {
        type: String,
        required: true
    },
    resumeTitle: {
        type: String,
        required: true
    },
    currentLocation: {
        type: String,
        required: true
    },
    postalAddress: {
        type: String,
        required: true
    },
    currentEmployer: {
        type: String,
        default: ""
    },
    currentDesignation: {
        type: String,
        default: ""
    }
}) 

module.exports = mongoose.model('dataUp',dataExcelSchema);