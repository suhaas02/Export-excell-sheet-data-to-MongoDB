//including all packages
const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const morgan = require('morgan')
const dotenv = require('dotenv');
const dataUp = require('./models/dataExcel')
const csvtojson = require('csvtojson')
const multer = require('multer');
const path = require('path');

const importFile = require('./utils/fileImport')
dotenv.config();
const app = express();

//defining the middlewares
app.use(morgan('tiny'));
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view-engine','ejs');

//connecting to database
mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });


//adding disk storage
var excelStorage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null, './dataUpload');
    },
    filename:(req,file,cb) => {
        cb(null,file.originalname + '-' + Date.now());
    }
})

//adding and configuring multer
var dataUpload = multer({ storage: excelStorage ,encoding:'text/csv'})

//defining get request for landing page
app.get("/", (req, res) => {
    // res.send("Welcome to API");
    res.render('dataForm.ejs');
});

//uploading excel sheet file to mongodb --> POST request
app.post('/upload',dataUpload.single("excelFile"), (req,res) => {
    // importFile('/dataUpload' + req.file.filename);
    console.log(req.file)
    importFile(req.file.path)
    return res.send("file uploaded successfully")
    // res.send("File successfully uploaded.");
})



//server port
app.listen(3000,() => {
    console.log("Server is UP");
})