const express = require('express');
const fs = require('fs');
const router = express.Router();

router.get('./api/notes',(req,res) => {
    const getData = JSON.parse(fs.readFileSync('./db/db.json'));
    res.json(getData)
});

router.post('./api/notes', (req,res) => {
    const postData = JSON.parse(fs.readFileSync('db.json'));
    res.json(postData);

})

module.exports = router;
