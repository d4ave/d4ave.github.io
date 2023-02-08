const express = require('express');
const app = express();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const fs = require('fs');
    // Ask for file location
    rl.question('Enter the file location: ', (fileLocation) => {
        if(!fileLocation) {
            fileLocation = '/home/INFORMATICA/alu10011380/Desktop/My/html/insert-files/white-hat';
        }
        // Use the fs.readdir() method to read the contents of the directory
        fs.readdir(fileLocation, (err, files) => {
            if (err) {
                console.log(err);
                return;
            }
             //Log the files in the directory
            //<!--//--!>
            console.log(files);  //activat it
            //<!--//--!> */

            //<!--//--!>  
            /* //
            items.forEach(file => {
                fs.stat(`${fileLocation}/${file}`, (err, stats) => {
                    if (err) {
                        console.log(err);
                        return;
                    }
                    if (stats.isFile()) {
                        console.log(file);
                    }
                });
            });
            */ //<!--//--!>
        });
    rl.question('Enter the name of the HTML file you want to use as the index: ', (indexFile) => {
        if(!indexFile) {
            indexFile = 'index.html';
    }

    app.get('/', (req, res) => {
        res.sendFile(`${fileLocation}/${indexFile}`);
    });
    
    app.use(express.static(__dirname + '/white-hat/'));
    ///////
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
      });
      
      rl.question('Enter a port number (default 3000): ', (port) => {
          if(!port) {
              port = 3000;
          }
      const chalk = require("chalk");
      app.listen(port, () => {
              console.log(`Web server on: http://localhost:${port}`);
              rl.close();
          }).on("error", (error) => {
          if (error.code === "EACCES") {
              console.error(`Permission denied, fallback to 3000. Port < 1024. Tried port: ${chalk.bold.underline(port)}`);
              app.listen(3000, () => {
                  console.log("Web server on: http://localhost:3000");
                  rl.close();
              });
          } else if (error.code === "EADDRINUSE") {
              console.error(`Port already in use, fallback to 3000. Tried port: ${chalk.bold.underline(port)}`);
              app.listen(3000, () => {
                  console.log("Web server on: http://localhost:3000");
                  rl.close();
              });
          } else {
              console.error(error);
              rl.close();
          }
        });
      });
///////////
    });
});

