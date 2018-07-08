var express = require('express');
var router = express.Router();
var path = require("path");


/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('./index.html')
});

router.get('/resume', function(req, res, next) {
    res.sendFile(__dirname + '/static/nilagnik_resume_new.pdf')
});

module.exports = router;
