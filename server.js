const csvtojson = require("csvtojson");
const express = require("express");
const app = express();
app.post('/', (req, res) => {
    const query = req.body.query;
    // process to information
    res.json(information);
})
app.listen(3000);