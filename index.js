const fs = require("fs");
const appJS = "/home/khojiakbar/WebstormProjects/my.click.uz-evolution/src/App.js";
const textFile = "/home/khojiakbar/a.azizov/Projects/nodejs/fileExample1/textFile.txt";
const soft = "soft";

fs.copyFileSync(
    '/home/khojiakbar/a.azizov/Projects/nodejs/fileExample1/textFile.txt',
    '/home/khojiakbar/a.azizov/Projects/nodejs/dest.txt', {
    process: function(contents) {
        console.log("Here is the contents",contents);
        return contents;
    }
});


fs.readFile(textFile, "utf8", (err, data) => {
    try {

            const newData =  data.toString().replace(/hard/g, "soft");
            console.log(data.toString());
            console.log("-----------");
            console.log(newData);

    }catch (e) {
        console.log("Error:", e)
    }
})


// fs.open(textFile, "r+", (err, fd) => {
//     try {
//         const fileContent = fs.readFileSync(textFile);
//         const parsedContent = fileContent.toString();
//         Object.keys(parsedContent).forEach(content => {
//             const regEx = new RegExp("hard");
//            const result = regEx.test(content.toString());
//            console.log(result);
//         });
//
//
//
//         // const checkValue = fileContent.toString();
//         // const regEx = new RegExp("hard");
//         // const result = regEx.test(checkValue);
//         // console.log(result);
//
//
//     } catch (err) {
//         console.log("Error:", err);
//     }
//
// });



// const copiedContent = fs.copyFileSync(appJS, '/home/khojiakbar/a.azizov/Projects/nodejs/dest.txt', {
//     process: function (content) {
//         console.log("hello");
//         console.log(content, "Copied content");
//         return content;
//     }
// });


// fs.writeFile('/home/khojiakbar/a.azizov/Projects/nodejs/dest.txt', "Good Bye", (err) => {
//     console.log("Hello");
//     console.log(err);
// });




