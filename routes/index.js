var express = require('express');
var router = express.Router();
var path = require("path");
var http = require('http'),
    fileSystem = require('fs');


/* GET home page. */
router.get('/', function(req, res, next) {
    res.json('Hola')
});

router.get('/resume', function(req, res, next) {

    res.sendFile(__dirname + '/static/nilagnik_resume_new.pdf')
});

router.get('/apk', function(req, res, next) {

    var filePath = path.join(__dirname, '/static/WeCare.apk');
    var stat = fileSystem.statSync(filePath);
    //res.sendFile(__dirname + '/static/WeCare.apk')
    res.writeHead(200, {
        "Content-Type": "application/vnd.android.package-archive",
        "Content-Disposition": "attachment; filename=" + "WeCare.apk",
        'Content-Length': stat.size
    });

    var readStream = fileSystem.createReadStream(filePath);
    // We replaced all the event handlers with a simple call to readStream.pipe()
    readStream.pipe(res);

});

module.exports = router;
