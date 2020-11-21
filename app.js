//loading express module and storing function in express
const express = require('express');
//storing object of type express in constant called app (by convention)
const app = express();

//Sending content to client from link
app.use(express.static('public'));

//Port used for testing
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
