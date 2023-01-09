const express = require('express');
const app = express();

//app.use(express.static('index.html'));           
app.get('/', (req, res) => {
    //res.sendFile(`${__dirname}/white-hat/index.html`);
    res.sendFile(`${__dirname}/white-hat/`);
});
app.use(express.static(__dirname + '/white-hat/css'));

app.listen(3001, () => {
  console.log('Web server on: http://localhost:3001');
});