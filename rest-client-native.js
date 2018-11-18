var qs = require("querystring");
var http = require("http");

var options = {
  "method": "POST",
  "hostname": "localhost",
  "port": "3000",
  "path": "/api/v1/users",
  "headers": {
    "content-type": "application/x-www-form-urlencoded",
    "cache-control": "no-cache",
    "postman-token": "b6f3222f-ee49-4604-1a1b-2010ae0905f3"
  }
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.write(qs.stringify({ name: 'kleber', password: 'password' }));
req.end();