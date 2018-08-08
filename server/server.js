const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));

PORT = 5000;

app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})