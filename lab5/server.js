

const express = require('express');
var dateformat = require('dateformat');
var fs = require('fs');

var books = require ('./Books.js');
var computers = require ('./Computers.js');


const app = express();
const router = express.Router()

let writeData = (data) => {
    data +="\r\n"
    fs.appendFile('./server_log.txt', data, function(error){
        if(error){
            throw error;
        }
        console.log("Log Saved!");
    });


}
let logger = (request, response, next) => {
    const todays = dateformat(new Date(), 'dddd, mmmm dS, yyyy, h:MM:ss TT');
    let data = `[${todays} ${request.originalUrl} ]`
    writeData(data);
    next();
}


// ---------------------------------------------
app.use(logger)

let booksLogger = (request, response, next) => {
    console.log("Books logger called")
    next()


}

app.use("/books", booksLogger, books)
app.use("/books/computers", computers)

app.listen(8080)
console.log("Server started on port " + 8080)