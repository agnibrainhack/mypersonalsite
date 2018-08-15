var express = require('express');
var router = express.Router();
var path = require("path");


/* GET home page. */
router.get('/', function(req, res, next) {
    res.json('Hola')
});

router.get('/resume', function(req, res, next) {
    res.sendFile(__dirname + '/static/nilagnik_resume_new.pdf')
});

router.get('/apk', function(req, res, next) {
    res.sendFile(__dirname + '/static/WeCare.apk')
});

module.exports = router;
