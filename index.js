const fs = require("fs");
const path = require("path");
const appJS = "/home/khojiakbar/WebstormProjects/my.click.uz-evolution/src/App.js";
const textFile = "/home/khojiakbar/a.azizov/Projects/nodejs/fileExample1/textFile.txt";
const store = "/home/khojiakbar/WebstormProjects/my.click.uz-evolution/src/store/";
const components = "/home/khojiakbar/WebstormProjects/my.click.uz-evolution/src/ui/Components/";
const container = "/home/khojiakbar/WebstormProjects/my.click.uz-evolution/src/ui/Containers/";
const routeContainer = "/home/khojiakbar/WebstormProjects/my.click.uz-evolution/src/ui/RouteContainers/";
const views = "/home/khojiakbar/WebstormProjects/my.click.uz-evolution/src/ui/Views/";



// fs.readFile(appJS, (err, data) => {
//     try {
//         const newData =  data.toString().replace(/state.user/g, "state.user_deprecated");
//         fs.writeFile(appJS, newData, (err) => {
//            if (err) return console.log(err);
//         });
//     }catch (e) {
//         console.log("Error:", e)
//     }
// });

fs.readdir(views, (err, filenames) => {
    try{

        filenames.forEach(filename => {
            const absolutePath = views + filename;
           if( fs.lstatSync(absolutePath).isDirectory()){
               fs.readdir(absolutePath, (err, files) => {
                   try{
                       files.forEach(file => {
                           const pathForFiles = absolutePath + "/" + file;
                           if(fs.lstatSync(pathForFiles).isDirectory()){
                               fs.readdir(pathForFiles,
                                   (err, newFiles) => {
                                       if(err) return console.log(err);
                                       newFiles.forEach(currentFile => {
                                           if(path.extname(currentFile) === ".scss") return;
                                           fs.readFile(pathForFiles + "/" + currentFile, "utf8",
                                               (err, fileContent) => {
                                           const changedContent = fileContent.toString().replace(/state.unired/g, "state.unired_deprecated");
                                               fs.writeFile(pathForFiles + "/" + currentFile, changedContent, (err) => {
                                                   if(err) return console.log(err);
                                               })
                                           })
                                       })
                                   })
                           } else{
                           const ext = path.extname(file);
                           if(ext === ".scss") return;
                           fs.readFile(absolutePath + "/" + file, "utf8",
                               (err, content) =>{
                                   if(err) return console.log(err);
                                   const changedContent = content.toString().replace(/state.unired/g, "state.unired_deprecated");
                                   fs.writeFile(absolutePath + "/" + file, changedContent, (err) => {
                                       if(err) return console.log(err);
                                   })
                               })
                           }
                       })
                   }catch (e) {
                       console.log(e);
                   }
               })
           } else if(fs.lstatSync(absolutePath).isFile()){
               const ext = path.extname(filename);
               if(ext === ".scss") return;
               fs.readFile(absolutePath, "utf8",
                   (err, content) =>{
                   if(err) return console.log(err);

                   const changedContent = content.toString().replace(/state.unired/g, "state.unired_deprecated");
                   fs.writeFile(absolutePath, changedContent, (err) => {
                     if(err) return console.log(err);
                   })
               });
           }
        });
        console.log("Files changed");
    }catch (e) {
        console.log(e)
    }
})


