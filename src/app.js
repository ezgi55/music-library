const express = require('express')
const artistController = require('./src/controllers/artist')
const app = express();

app.use(express.json());

app.get('/', (req, res) => res.send('Hello World!'));
app.post('/artist',async (req,res) => {
    artistController.new(req.body.name,req.body.surname)
    return res.status(201).json({message:'ok'})
});
module.exports = app;

