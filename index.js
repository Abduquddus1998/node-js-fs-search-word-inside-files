const fs = require("fs");
const appJS = "/home/khojiakbar/WebstormProjects/my.click.uz-evolution/src/App.js";
const textFile = "/home/khojiakbar/a.azizov/Projects/nodejs/fileExample1/textFile.txt";


fs.readFile(textFile, "utf8",(err, data) => {
    try {
        const newData =  data.toString().replace(/hard/g, "soft");
        fs.writeFile(textFile, newData, (err) => {
           if (err) return console.log(err);
        });
    }catch (e) {
        console.log("Error:", e)
    }
})



