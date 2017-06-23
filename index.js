var formidable = require('formidable');
var fs = require('fs');

module.exports = function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    // var
    res.write('Hello World!'); 
    context.done();
};

function hh (url, file)
{
    var req = request.post(url, function (err, resp, body) {
        if (err) {
            console.log('Error!');
        } else {
            console.log('URL: ' + body);
        }
    });
    var form = req.form();
}