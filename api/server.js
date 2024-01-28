const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const port = 3000;
const path = require('path');
app.use(express.static(path.join(__dirname, '../frontend/dist/amazing-animal-paintings')));
const api = require('./api.js');

var corsOptions = {
	origin: "http://localhost:4200"
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', api);

app.get('*', async (req,res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/amazing-animal-paintings/index.html'));
});

app.listen(port, () => {
	console.log(`Server listening at http://localhost:${port}`);
});